import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import * as S from './styles';
import { useState } from 'react';
import {
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from '@mui/material';
export default function Detail() {
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
    <S.Background>
      <S.Modal>
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
            <S.InputComment
              placeholder="Type something here…"
              minRows={3}
              endDecorator={
                <Box
                  sx={{
                    display: 'flex',
                    gap: 'var(--Textarea-paddingBlock)',
                    pt: 'var(--Textarea-paddingBlock)',
                    borderTop: '1px solid ',
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                    flex: 'auto',
                  }}
                >
                  <Button
                    sx={{
                      ml: 'auto',
                      backgroundColor: '#fca4be',
                      color: 'white',
                    }}
                  >
                    Send
                  </Button>
                </Box>
              }
            />
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
      </S.Modal>
    </S.Background>
  );
}
