import { DateTimeDisplay } from './DateTimeDisplay';
import { Box, Typography } from '@mui/material';
export const ShowCounter = ({
  days,
  hours,
  minutes,
  seconds
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}) => {
  const hValue = hours >= 22 ? ' godziny' : hours >= 5 || hours === 0 ? ' godzin' : ' godzina';
  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          background: '#fff',
          paddingX: 4,
          paddingY: 1,
          display: 'flex',
          borderRadius: '4px',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          flexDirection: ['column', 'column', 'row']
        }}
      >
        <Box>
          <Typography sx={{ fontFamily: 'Fira Code', textAlign: 'center' }}>Do wyjazdu zostało:</Typography>
        </Box>

        <Box display="flex">
          <DateTimeDisplay value={days} type={days <= 1 ? ' dzień' : ' dni'} isDanger={days <= 3} />
        </Box>

        <Box display="flex">
          <DateTimeDisplay value={hours} type={hValue} isDanger={false} />
        </Box>

        <Box display="flex">
          <DateTimeDisplay value={minutes} type={' minut'} isDanger={false} />
        </Box>
        <Box display="flex">
          <DateTimeDisplay value={seconds} type={' sekund'} isDanger={false} />
        </Box>
      </Box>
    </Box>
  );
};
