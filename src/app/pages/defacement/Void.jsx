import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  styled,
} from '@mui/material';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: {
    margin: '16px',
  },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '16px',
    },
  },
}));

function Void() {
  const [denomination, setDenominations] = useState('');
  const [spmcilno, setSpmcilno] = useState('');
  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <FormControl sx={{ width: 300 }}>
          <InputLabel id="demo-simple-select-label">Denomination</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={denomination}
            label="Denomination"
            onChange={(e) => setDenominations(e.target.value)}
          >
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={100}>100</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: 300 }}>
          <InputLabel id="demo-simple-select-label">Add SPMCIL No.</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={spmcilno}
            label="SPMCIL No."
            onChange={(e) => setSpmcilno(e.target.value)}
          >
            <MenuItem value={1111111}>1111111</MenuItem>
            {/* <MenuItem value={50}>50</MenuItem> */}
            {/* <MenuItem value={100}>100</MenuItem> */}
          </Select>
        </FormControl>
        <TextField placeholder="BCT Unique No" value={spmcilno} label="BCT Unique No" />
      </Box>
      <br />
      <Box sx={{height:"40vh",display:"flex",justifyContent:"flex-end",alignItems:"end"}}>
        <Box sx={{}}>
          <Button variant="contained" sx={{width:"20em"}} onClick={() => {
                      Swal.fire({
                        icon: 'warning',
                        text: 'Want to cancel?',
                        showCancelButton: true,
                        confirmButtonText:"Yes",
                        cancelButtonText:"No"
                      });
                    }}>Void</Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Void;
