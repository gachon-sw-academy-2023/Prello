import { Skeleton } from '@mui/material';

export const CardSkeleton = () => {
  return (
    <Skeleton
      variant="rectangular"
      width={250}
      height={150}
      sx={{
        marginTop: '30px',
        marginLeft: '25px',
        borderRadius: '5px',
      }}
    />
  );
};
