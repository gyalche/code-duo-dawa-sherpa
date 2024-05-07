import { Box } from '@mui/material';
import React from 'react';
import { BackButton } from './Buttons';

interface Props {}

export const Error404 = (props: Props) => {
  return (
    <Box className="error404">
      <Box className="error-img">
        <img src="images/not-found.png" alt="error" height="80%" width="90%" />
      </Box>
      <BackButton name="click" />
    </Box>
  );
};
