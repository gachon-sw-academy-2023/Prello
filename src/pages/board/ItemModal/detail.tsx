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

interface IMember {
  name: string;
  profile: string;
}

interface DetailProps {
  setOpen: (b: boolean) => void;
  itemId: number;
}

export const Detail = ({ setOpen, itemId }: DetailProps) => {
  const [value, setValue] = useState<Dayjs | null>(dayjs(new Date()));
  const [personName, setPersonName] = useState<string[]>([]);
  const [member, setMember] = useState<IMember[]>([]);
  const [item, setItem] = useState<IItem>();
  const [card, setCard] = useState<ICard>();
  const [description, setDescription] = useState<string>();

  useEffect(() => {
    axios
      .get('/members/list')
      .then((res) => setMember(res.data))
      .catch((error) => alert(error));

    axios.get(`/item/${itemId}`).then((res) => {
      setItem(res.data);
      setValue(res.data.date);
      setPersonName(res.data.members);
      setDescription(res.data.description);
      axios.get(`/card/${res.data.cardId}`).then((res) => setCard(res.data));
    });
  }, []);

  const setCardList = () => {
    axios.get(`/card/${item?.cardId}`).then((res) => setCard(res.data));
  };

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === 'string' ? value.split(',') : value);
  };

  const handleDesription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleDelete = () => {
    axios.post('/item/delete/', {
      itemId,
    });
    setOpen(false);
    setCardList();
  };

  const handleSave = () => {
    axios.post(`/item/${itemId}`, {
      title: item?.title,
      order: item?.order,
      cardId: item?.cardId,
      description: description,
      date: value,
      members: personName,
    });

    setOpen(false);
    setCardList();
  };
  return (
    <Modal size="lg" onClickToggleModal={() => setOpen(false)}>
      <S.Title>
        <S.TitleWrapper>
          <S.ListName>{card?.title}</S.ListName>
          <S.Divider />
          <S.ItemName>{item?.title}</S.ItemName>
        </S.TitleWrapper>
        <S.InfoTitle>설명</S.InfoTitle>
        <S.Description
          placeholder="설명 추가하기..."
          defaultValue={item?.description}
          onChange={() => handleDesription}
        ></S.Description>
      </S.Title>
      <S.Wrapper>
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
            sx={{ width: '300px' }}
            multiple
            value={personName ? personName : []}
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
            {member.map((member) => (
              <MenuItem key={member.name} value={member.name}>
                {member.name}
              </MenuItem>
            ))}
          </Select>
        </S.Info>
        <S.BtnWrapper>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleDelete}>Delete</button>
        </S.BtnWrapper>
      </S.Wrapper>
    </Modal>
  );
};

export default Detail;
