import {
  Box,
  FormControl,
  IconButton,
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
  TablePagination,
  TableRow,
  styled,
  Typography,
} from '@mui/material';
import { Breadcrumb } from 'app/components';
import React from 'react';

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

function CurrentAvailable() {
  const banksName = [
    {
      name: 'Bank of Baroda',
      abbreviation: 'BOB',
    },
    {
      name: 'Bank of India',
      abbreviation: 'BOI',
    },
    {
      name: 'Bank of Maharashtra',
      abbreviation: 'BOM',
    },
    {
      name: 'Canara Bank',
      abbreviation: 'CB',
    },
    {
      name: 'Central Bank of India',
      abbreviation: 'CBI',
    },
    {
      name: 'Indian Bank',
      abbreviation: 'IB',
    },
    {
      name: 'Punjab National Bank',
      abbreviation: 'PNB',
    },
    {
      name: 'Punjab & Sind Bank',
      abbreviation: 'PSB',
    },
    {
      name: 'Union Bank of India',
      abbreviation: 'UBI',
    },
    {
      name: 'UCO Bank',
      abbreviation: 'UCO',
    },
    {
      name: 'State Bank of India',
      abbreviation: 'SBI',
    },
  ];
  const currAvlData = [
    {
      noOfTwenty: 20,
      noOfFifty: 100,
      noOfHundred: 50,
      noOfTwoHundred: 100,
    },
  ];
  const uniqueIDs = [
    {
      sp: 1234,
      bc: 4321,
    },
    {
      sp: 2345,
      bc: 5432,
    },
    {
      sp: 2345,
      bc: 5432,
    },
    {
      sp: 3456,
      bc: 6543,
    },
    {
      sp: 4567,
      bc: 7654,
    },
    {
      sp: 5678,
      bc: 8765,
    },
  ];
  const [selectedBankName, setSelectedBankName] = React.useState('');
  const [selectedBranch, setSelectedBranch] = React.useState('');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Current Available' }]} />
      </Box>
      <Box sx={{ display: 'flex' }}>
        <FormControl fullWidth sx={{ m: 4 }}>
          <InputLabel id="bank-name-label">Bank Name</InputLabel>
          <Select
            labelId="bank-name-label"
            id="bank-name-select"
            value={selectedBankName}
            label="Bank Name"
            onChange={(e) => setSelectedBankName(e.target.value)}
          >
            {banksName.map((bank) => (
              <MenuItem key={bank.abbreviation} value={bank.abbreviation}>
                {bank.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ m: 4 }}>
          <InputLabel id="branch-name-label">Branch</InputLabel>
          <Select
            labelId="branch-name-label"
            id="branch-name-select"
            value={selectedBranch}
            label="Branch Name"
            onChange={(e) => setSelectedBranch(e.target.value)}
          >
            <MenuItem value={'branch1'}>Branch 1</MenuItem>
            <MenuItem value={'branch2'}>Branch 2</MenuItem>
            <MenuItem value={'branch3'}>Branch 3</MenuItem>
            <MenuItem value={'branch4'}>Branch 4</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <TableContainer component={Paper}>
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
              <TableCell align="center" colSpan={2}>
                Banks
              </TableCell>
              <TableCell align="center" colSpan={4}>
                Denomination
              </TableCell>
            </TableRow>
            <TableRow
              sx={{
                '& .MuiTableCell-head': {
                  color: '#343a40',
                  backgroundColor: '#adb5bd',
                },
              }}
            >
              <TableCell colSpan={2} />
              <TableCell align="center" sx={{ border: '2px solid white' }}>
                20
              </TableCell>
              <TableCell align="center" sx={{ border: '2px solid white' }}>
                50
              </TableCell>
              <TableCell align="center" sx={{ border: '2px solid white' }}>
                100
              </TableCell>
              <TableCell align="center" sx={{ border: '2px solid white' }}>
                200
              </TableCell>
            </TableRow>
          </TableHead>
          {selectedBankName !== '' && selectedBranch !== '' && (
            <TableBody>
              {currAvlData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="center" colSpan={2}>
                      {selectedBankName + ',' + selectedBranch}
                    </TableCell>
                    <TableCell align="center" onClick={handleOpen}>
                      {row.noOfTwenty}
                    </TableCell>
                    <TableCell align="center" onClick={handleOpen}>
                      {row.noOfFifty}
                    </TableCell>
                    <TableCell align="center" onClick={handleOpen}>
                      {row.noOfHundred}
                    </TableCell>
                    <TableCell align="center" onClick={handleOpen}>
                      {row.noOfTwoHundred}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
      {selectedBankName !== '' && selectedBranch !== '' && (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={currAvlData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            '.MuiTablePagination-selectLabel': {
              margin: 'auto',
            },
            '.MuiTablePagination-displayedRows': {
              margin: 'auto',
            },
          }}
        />
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Availability Details
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>SPMCIL Unique No</TableCell>
                <TableCell>BCT Unique No</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {uniqueIDs.map((data) => (
                <TableRow key={data.bc}>
                  <TableCell>{data.sp}</TableCell>
                  <TableCell>{data.bc}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Modal>
    </Container>
  );
}

export default CurrentAvailable;
