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
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import * as S from './styles';

export const Detail = ({ setOpen }: any) => {
  const [value, setValue] = useState<Dayjs | null>(dayjs('2022-04-07'));
  const [personName, setPersonName] = useState<string[]>([]);
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === 'string' ? value.split(',') : value);
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
          <S.ListName>To do</S.ListName>
          <S.Divider />
          <S.ItemName>할 일</S.ItemName>
        </S.TitleWrapper>
        <S.Description>
          이건 아이템 설명입니다 아이템 설명 아이템 설명
        </S.Description>
      </S.Title>
      <S.Wrapper>
        <S.Comment>
          <S.CommentTitle>comments</S.CommentTitle>
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
            MenuProps={MenuProps}
          >
            {members.map((member) => (
              <MenuItem key={member.name} value={member.name}>
                {member.name}
              </MenuItem>
            ))}
          </Select>
        </S.Info>
      </S.Wrapper>
    </Modal>
  );
};

export default Detail;
