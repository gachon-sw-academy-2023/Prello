import Modal from '@/components/Modal/Modal';
import Box from '@mui/joy/Box';
import {
  Chip,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import axios from 'axios';
import dayjs, { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import * as S from './styles';

interface IItem {
  title: string;
  order: number;
  cardId: number;
  description: string;
  members: string[];
}

interface ICard {
  title: string;
}

export const Detail = ({ setOpen, itemId }: any) => {
  const [item, setItem] = useState<IItem>();
  const [card, setCard] = useState<ICard>();
  const [value, setValue] = useState<Dayjs | null>(dayjs(new Date()));
  const [personName, setPersonName] = useState<string[]>([]);
  const [description, setDescription] = useState<string>();

  useEffect(() => {
    axios.get(`/item/${itemId}`).then((res) => {
      setItem(res.data);
    });
  }, []);

  useEffect(() => {
    if (item) {
      axios.get(`/card/${item?.cardId}`).then((res) => setCard(res.data));
    }
  }, [item]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === 'string' ? value.split(',') : value);
  };

  const handleDesription = (e: any) => {
    setDescription(e.target.value);
  };

  const handleDelete = () => {
    axios.post('/item/delete/', {
      itemId,
    });

    setOpen(false);
  };

  const handleSave = () => {
    //TODO: 아이템 상세 정보 저장
    axios.post(`/item/${itemId}`, {
      title: item?.title,
      order: item?.order,
      cardId: item?.cardId,
      description: description,
      date: value,
      members: personName,
    });
  };

  interface IMember {
    name: string;
    profile: string;
  }
  let members: IMember[] = [
    {
      name: 'dahye',
      profile: '/assets/workspace/sample-profile-image.png',
    },
    {
      name: 'leah',
      profile: '/assets/workspace/sample-profile-image.png',
    },
    {
      name: 'rylee',
      profile: '/assets/workspace/sample-profile-image.png',
    },
    {
      name: '멤버1',
      profile: '/assets/workspace/sample-profile-image.png',
    },
    {
      name: '멤버2',
      profile: '/assets/workspace/sample-profile-image.png',
    },
    {
      name: '멤버3',
      profile: '/assets/workspace/sample-profile-image.png',
    },
    {
      name: '멤버4',
      profile: '/assets/workspace/sample-profile-image.png',
    },
    {
      name: '멤버5',
      profile: '/assets/workspace/sample-profile-image.png',
    },
    {
      name: '멤버6',
      profile: '/assets/workspace/sample-profile-image.png',
    },
    {
      name: '멤버7',
      profile: '/assets/workspace/sample-profile-image.png',
    },
    {
      name: '멤버8',
      profile: '/assets/workspace/sample-profile-image.png',
    },
  ];
  return (
    <Modal size="lg" onClickToggleModal={() => setOpen(false)}>
      <S.Title>
        <S.TitleWrapper>
          <S.ListName>{card?.title}</S.ListName>
          <S.Divider />
          <S.ItemName>{item?.title}</S.ItemName>
        </S.TitleWrapper>
        <S.Description
          placeholder="설명 추가하기..."
          defaultValue={item?.description}
          onChange={handleDesription}
        >
          {item?.description}
        </S.Description>
      </S.Title>
      <S.Wrapper>
        <S.Comment>
          <S.InfoTitle>comments</S.InfoTitle>
          <S.CommentWrapper>
            <S.MyComment>
              <S.ProfileImg />
              <S.InputComment placeholder="Add a comment..." />
            </S.MyComment>
            <S.PostBtn>Post</S.PostBtn>
          </S.CommentWrapper>
          <S.MemberComment>
            <S.ProfileImg />
            <S.MemberCommentWrapper>
              <h1>Member 1</h1>
              <p>
                comment...comment...comment...comment...comment...comment...comment...comment...comment...comment...comment...comment...comment...comment...comment...comment...
              </p>
            </S.MemberCommentWrapper>
          </S.MemberComment>
          <S.LoadBtn>Load More</S.LoadBtn>
        </S.Comment>
        <S.Info>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <InputLabel>Date</InputLabel>
            <DatePicker
              disableFuture
              openTo="year"
              views={['year', 'month', 'day']}
              value={value}
              inputFormat={'YYYY/MM/DD'}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <InputLabel sx={{ marginTop: '20px' }}>Member</InputLabel>
          <Select
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {members.map((member) => (
              <MenuItem key={member.name} value={member.name}>
                {member.name}
              </MenuItem>
            ))}
          </Select>
          <S.BtnWrapper>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleDelete}>Delete</button>
          </S.BtnWrapper>
        </S.Info>
      </S.Wrapper>
    </Modal>
  );
};

export default Detail;
