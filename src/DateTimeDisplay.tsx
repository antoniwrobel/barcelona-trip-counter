import { Box, Typography } from '@mui/material';

export const DateTimeDisplay = ({ value, type, isDanger }: { value: number; type: string; isDanger: boolean }) => {
  return (
    <Box display="flex" m="20px 0" fontSize="48px">
      <Typography sx={{ fontFamily: 'Fira Code', mr: '10px', fontWeight: 'bold' }}>{value}</Typography>
      <Typography sx={{ fontFamily: 'Fira Code' }}>{type}</Typography>
    </Box>
  );
};
