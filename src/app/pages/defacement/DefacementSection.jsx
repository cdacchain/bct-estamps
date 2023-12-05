import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  styled,
} from '@mui/material';
import React, { useState } from 'react';

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

function DefacementSection() {
  const rows = [
    {
      denomination: '20',
      spuniqueno: 11111,
      bctuniqueno: 11111,
    },
  ];
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [newRow, setNewRow] = useState(false);
  const [rowDatas, setRowDatas] = useState(rows);
  const [denomination, setDenominations] = useState('');
  const [spmcilno, setSpmcilno] = useState('');
  return (
    <Container>
      <h1>Deface</h1>
      {/* <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                '& .MuiTableCell-head': {
                  color: 'white',
                  backgroundColor: '#495057',
                },
              }}
            >
              <TableCell align="center">Denomination</TableCell>
              <TableCell align="center">SPMCIL Unique No</TableCell>
              <TableCell align="center">BCT Unique No</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowDatas.map((row) => (
              <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row" align="center">
                  {row.denomination}
                </TableCell>
                <TableCell align="center">{row.spuniqueno}</TableCell>
                <TableCell align="center">{row.bctuniqueno}</TableCell>
                <TableCell align="center">
                  <Button onClick={handleOpen}>Submit for Defacement</Button>
                </TableCell>
              </TableRow>
            ))}
            {newRow && (
              <TableRow>
                <TableCell align="center">
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
                </TableCell>
                <TableCell colSpan={2} />
                <TableCell>
                  <Button
                    onClick={() => {
                      setRowDatas((prev) => {
                        return [
                          ...prev,
                          { denomination, spuniqueno: '11111', bctuniqueno: '11111' },
                        ];
                      });
                      setNewRow(false);
                      setDenominations('');
                    }}
                  >
                    Add
                  </Button>
                  <Button
                    onClick={() => {
                      setNewRow(false);
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            )}
            <TableRow>
              <TableCell colSpan={4}>
                <Button
                  variant="contained"
                  onClick={() => {
                    setNewRow(true);
                  }}
                  sx={{ px: 5, mx: 5 }}
                >
                  Add
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Buyer Details
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography>Name:</Typography>
            <TextField size="small" />
          </Box>
          <br />
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography>S/O or D/O:</Typography>
            <TextField size="small" />
          </Box>
          <br />
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography>Email:</Typography>
            <TextField size="small" />
          </Box>
          <br />
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography>Address:</Typography>
            <TextField size="small" />
          </Box>
          <br />
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography>Purpose:</Typography>
            <FormControl sx={{ width: 200 }} size="small">
              <InputLabel id="demo-simple-select-label">Purpose</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                //value={denomination}
                label="Purpose"
                // onChange={(e) => setDenominations(e.target.value)}
              >
                <MenuItem value={20}>House Rent Aggrement</MenuItem>
                <MenuItem value={50}>School Affidavit</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <br />
          <Button variant="contained">Submit</Button>
        </Box>
      </Modal> */}
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
      <Box sx={{ pt: 2, display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ width: '25vw', padding: '1rem' }} component={Paper}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Buyer Details
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography>Name:</Typography>
            <TextField size="small" />
          </Box>
          <br />
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography>S/O or D/O:</Typography>
            <TextField size="small" />
          </Box>
          <br />
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography>Email:</Typography>
            <TextField size="small" />
          </Box>
          <br />
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography>Address:</Typography>
            <TextField size="small" />
          </Box>
          <br />
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography>Purpose:</Typography>
            <FormControl sx={{ width: 200 }} size="small">
              <InputLabel id="demo-simple-select-label">Purpose</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                //value={denomination}
                label="Purpose"
                // onChange={(e) => setDenominations(e.target.value)}
              >
                <MenuItem value={20}>House Rent Aggrement</MenuItem>
                <MenuItem value={50}>School Affidavit</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <br />
        </Box>
      </Box>
      <Box sx={{display:"flex",justifyContent:"flex-end"}}>
        <Button variant="contained">Deface</Button>
      </Box>
      <Box sx={{display:"flex",justifyContent:"center"}}>
        <Typography><i>Go to <b>History(Deface)</b> to print</i></Typography>
      </Box>
    </Container>
  );
}

export default DefacementSection;
