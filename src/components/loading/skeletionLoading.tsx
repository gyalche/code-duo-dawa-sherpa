import { Box, Skeleton } from '@mui/material';

const SkeletionLoading = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '500px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Skeleton
        animation="wave"
        height={10}
        width="80%"
        style={{ marginBottom: 6 }}
      />

      <Skeleton animation="wave" height={10} width="80%" />
    </Box>
  );
};

export default SkeletionLoading;
