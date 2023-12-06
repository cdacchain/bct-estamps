import { Box, Button, Grid, Modal, Paper, TextField, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import BarGraph2 from './BarGraph2';

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

const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
  border: '2px solid black',
  height: '15vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.2rem',
  borderRadius: 10,
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function AddDenomination() {
  const denominationData = ['10', '20', '50', '100', '500', '1000', '2000'];
  const [open,setOpen] = useState(false)
  const handleOpen = ()=>{
    setOpen(true)
  }
  const handleClose=()=>{
    setOpen(false)
  }
  const [openSecond,setOpenSecond] = useState(false)
  const handleOpenSecond = ()=>{
    setOpenSecond(true)
  }
  const handleCloseSecond=()=>{
    setOpenSecond(false)
  }

  return (
    <Container>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h2>Available Denominations</h2>
        <Button variant="contained" onClick={handleOpenSecond}>+ New</Button>
      </Box>
      <Box>
        <Grid container spacing={2}>
          {denominationData.map((data) => (
            <Grid key={data} item xs={3}>
              <Item sx={{ fontSize: '2rem' }}>
                {data}
                <Button onClick={handleOpen}>State wise usage</Button>
                <Button>Disable</Button>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            State wise usage
          </Typography>
          <Box>
            <BarGraph2/>
          </Box>
        </Box>
      </Modal>
      <Modal
        open={openSecond}
        onClose={handleCloseSecond}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Denomination
          </Typography>
          <Box>
            <TextField fullWidth placeholder='Denomination' type='number'/>
          </Box>
          <Button variant='contained' sx={{m:2}}>Submit</Button>
        </Box>
      </Modal>
    </Container>
  );
}

export default AddDenomination;
