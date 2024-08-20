import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Box } from '@mui/material';

const SkeletonList = ({ count = 3, variant , height, spacing = '0.5rem' }) => {
  return (
    <Box>
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton
          key={index}
          variant={variant}
          height={height}
          className="skeleton-wave"
          sx={{ marginBottom: spacing }}
        />
      ))}
    </Box>
  );
};

export default SkeletonList;
