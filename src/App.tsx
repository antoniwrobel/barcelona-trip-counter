import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { CountdownTimer } from './CountDownTimer';

export const App = () => {
  const SEVEN_DAYS_IN_MS = 7 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date('2023-03-10').getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + SEVEN_DAYS_IN_MS;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <CssBaseline />
      <Container maxWidth="lg" sx={{ display: 'grid', placeContent: ['center', 'center', 'initial'] }}>
        <Box
          sx={{
            position: 'relative',
            top: ['0', 0, '-100%'],
            bgcolor: '#cfe8fc',
            p: 4,
            alignItems: 'center',
            display: 'flex',
            boxSizing: 'border-box',
            justifyContent: 'space-between',
            width: '100%'
          }}
        >
          <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        </Box>
      </Container>
    </Box>
  );
};
