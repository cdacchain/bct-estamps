import {
  Box,
  FormControl,
  InputLabel,
  ListSubheader,
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
  const states = [
    {
      name: 'Andhra Pradesh',
      abbreviation: 'AP',
    },
    {
      name: 'Arunachal Pradesh',
      abbreviation: 'AR',
    },
    {
      name: 'Assam',
      abbreviation: 'AS',
    },
    {
      name: 'Bihar',
      abbreviation: 'BR',
    },
    {
      name: 'Chhattisgarh',
      abbreviation: 'CT',
    },
    {
      name: 'Goa',
      abbreviation: 'GA',
    },
    {
      name: 'Gujarat',
      abbreviation: 'GJ',
    },
    {
      name: 'Haryana',
      abbreviation: 'HR',
    },
    {
      name: 'Himachal Pradesh',
      abbreviation: 'HP',
    },
    {
      name: 'Jharkhand',
      abbreviation: 'JH',
    },
    {
      name: 'Karnataka',
      abbreviation: 'KA',
    },
    {
      name: 'Kerala',
      abbreviation: 'KL',
    },
    {
      name: 'Madhya Pradesh',
      abbreviation: 'MP',
    },
    {
      name: 'Maharashtra',
      abbreviation: 'MH',
    },
    {
      name: 'Manipur',
      abbreviation: 'MN',
    },
    {
      name: 'Meghalaya',
      abbreviation: 'ML',
    },
    {
      name: 'Mizoram',
      abbreviation: 'MZ',
    },
    {
      name: 'Nagaland',
      abbreviation: 'NL',
    },
    {
      name: 'Odisha',
      abbreviation: 'OD',
    },
    {
      name: 'Punjab',
      abbreviation: 'PB',
    },
    {
      name: 'Rajasthan',
      abbreviation: 'RJ',
    },
    {
      name: 'Sikkim',
      abbreviation: 'SK',
    },
    {
      name: 'Tamil Nadu',
      abbreviation: 'TN',
    },
    {
      name: 'Telangana',
      abbreviation: 'TG',
    },
    {
      name: 'Tripura',
      abbreviation: 'TR',
    },
    {
      name: 'Uttar Pradesh',
      abbreviation: 'UP',
    },
    {
      name: 'Uttarakhand',
      abbreviation: 'UL',
    },
    {
      name: 'West Bengal',
      abbreviation: 'WB',
    },
  ];

  const unionTerritories = [
    {
      name: 'Andaman and Nicobar Islands',
      abbreviation: 'AN',
    },
    {
      name: 'Chandigarh',
      abbreviation: 'CH',
    },
    {
      name: 'Dadar and Nagar Haveli',
      abbreviation: 'DN',
    },
    {
      name: 'Daman and Diu',
      abbreviation: 'DD',
    },
    {
      name: 'Delhi',
      abbreviation: 'DL',
    },
    {
      name: 'Jammu and Kashmir',
      abbreviation: 'JK',
    },
    {
      name: 'Ladakh',
      abbreviation: 'LA',
    },
    {
      name: 'Lakshadweep',
      abbreviation: 'LD',
    },
    {
      name: 'Pondicherry',
      abbreviation: 'PY',
    },
  ];
  return (
    <Container>
      <Box sx={{ display: 'flex' }}>
        <FormControl fullWidth sx={{ m: 4 }}>
          <InputLabel id="demo-simple-select-label">State</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //value={values.state}
            name="state"
            label="Age"
            //onChange={handleChange}
            //onBlur={handleBlur}
          >
            <ListSubheader>States</ListSubheader>
            {states.map((state) => (
              <MenuItem key={state.name} value={state.abbreviation}>
                {state.name}
              </MenuItem>
            ))}
            <ListSubheader>Union Territories</ListSubheader>
            {unionTerritories.map((state) => (
              <MenuItem key={state.name} value={state.abbreviation}>
                {state.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
