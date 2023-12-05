import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
} from '@mui/material';
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

function VoidDetails() {
  const rows = [
    {
      id: 1,
      denomination: '20',
      spuniqueno: 11111,
      bctuniqueno: 11111,
      purpose: 'House Rent Aggrement',
      status: 'Deface',
    },
    {
      id: 2,
      denomination: '50',
      spuniqueno: 555555,
      bctuniqueno: 555555,
      purpose: 'School Affidavit',
      status: 'Void',
    },
  ];
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

  return (
    <Container>
      <Box sx={{ display: 'flex' }}>
        <FormControl fullWidth sx={{ m: 4 }}>
          <InputLabel id="bank-name-label">Bank Name</InputLabel>
          <Select
            labelId="bank-name-label"
            id="bank-name-select"
            //value={selectedBankName}
            label="Bank Name"
            // onChange={(e) => setSelectedBankName(e.target.value)}
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
            //value={selectedBranch}
            label="Branch Name"
            //onChange={(e) => setSelectedBranch(e.target.value)}
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
              <TableCell align="center">Denomination</TableCell>
              <TableCell align="center">SPMCIL Unique No</TableCell>
              <TableCell align="center">BCT Unique No</TableCell>
              <TableCell align="center">Purpose</TableCell>
              <TableCell align="center">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row" align="center">
                  {row.denomination}
                </TableCell>
                <TableCell align="center">{row.spuniqueno}</TableCell>
                <TableCell align="center">{row.bctuniqueno}</TableCell>
                <TableCell align="center">{row.purpose}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default VoidDetails;
