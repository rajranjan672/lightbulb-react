import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Project Title" variant="outlined" />
      <TextField id="outlined-basic" label="Idea Description" variant="outlined" />
      <TextField id="outlined-basic" label="Unique Selling Point of your Idea" variant="outlined" />
      {/* <TextField id="outlined-basic" label="Field4" variant="outlined" /> */}
      
    </Box>
  );
}