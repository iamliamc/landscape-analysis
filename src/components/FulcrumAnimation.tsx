import { Box } from '@mui/material';

const FulcrumAnimation = () => {
  return (
    <Box
      sx={{
        width: '300px',
        height: '200px',
        position: 'relative',
        margin: '50px auto',
      }}
    >
      <Box
        sx={{
          width: '20px',
          height: '200px',
          backgroundColor: 'grey.700',
          position: 'absolute',
          bottom: -100,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />
      
      <Box
        sx={{
          width: '400px',
          height: '10px',
          backgroundColor: 'primary.main',
          position: 'absolute',
          bottom: '100px',
          left: '50%',
          transform: 'translateX(-50%)',
          transformOrigin: 'center',
          animation: 'tilt 8s ease-in-out infinite',
          '@keyframes tilt': {
            '0%, 100%': {
              transform: 'translateX(-50%) rotate(0deg)',
            },
            '80%': {
              transform: 'translateX(-50%) rotate(10deg)',
            },
          },
        }}
      >
        <Box
          sx={{
            width: '30px',
            height: '30px',
            backgroundColor: 'secondary.main',
            borderRadius: '50%',
            position: 'absolute',
            bottom: '10px',
            left: 0,
          }}
        />        
        <Box
          sx={{
            width: '30px',
            height: '30px',
            backgroundColor: 'secondary.main',
            borderRadius: '50%',
            position: 'absolute',
            bottom: '10px',
            right: 0,
            animation: 'grow 8s ease-in-out infinite',
            '@keyframes grow': {
              '0%, 100%': {
                width: '30px',
                height: '30px',
                bottom: '10px',
                right: 0,
              },
              '50%': {
                width: '45px',
                height: '45px',
                bottom: '10px',
                right: '-7.5px',
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default FulcrumAnimation;