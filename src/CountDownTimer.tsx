import { Typography } from '@mui/material';
import { ShowCounter } from './ShowCounter';
import { useCountdown } from './useCountDown';

export const CountdownTimer = ({ targetDate }: { targetDate: number }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <Typography sx={{ fontFamily: 'Fira Code' }}>Nadszedł czas wyjazdu!</Typography>;
  } else {
    return <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />;
  }
};
