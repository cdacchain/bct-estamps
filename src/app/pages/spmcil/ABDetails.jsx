import { Box, FormControl, InputLabel, ListSubheader, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled } from '@mui/material';
import React from 'react'

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
const bankDetails = [
  {
    slno: 1,
    name: 'Bank of Baroda',
    branch: 'Branch 1',
    abbreviation: 'BOB',
    contactPerson:"Rahul",
    email:"test@bob.com",
    address:"123 Main Road",
    phoneno:"9876543210"
  },
  {
    slno: 2,
    name: 'Bank of India',
    branch: 'Branch 1',
    abbreviation: 'BOI',
    contactPerson:"Aditya",
    email:"test@boi.com",
    address:"123 Main Road",
    phoneno:"9876543210"

  },
  {
    slno: 3,
    name: 'Bank of Maharashtra',
    branch: 'Branch 1',
    abbreviation: 'BOM',
    contactPerson:"Ram",
    email:"test@bom.com",
    address:"123 Main Road",
    phoneno:"9876543210"
  },
  {
    slno: 4,
    name: 'Punjab National Bank',
    branch: 'Branch 1',
    abbreviation: 'PNB',
    contactPerson:"Bikash",
    email:"test@pnb.com",
    address:"123 Main Road",
    phoneno:"9876543210"
  },
  {
    slno: 5,
    name: 'Punjab & Sind Bank',
    branch: 'Branch 1',
    abbreviation: 'PSB',
    contactPerson:"Sudip",
    email:"test@psb.com",
    address:"123 Main Road",
    phoneno:"9876543210"
  },

  {
    slno: 6,
    name: 'State Bank of India',
    branch: 'Branch 1',
    abbreviation: 'SBI',
    contactPerson:"James",
    email:"test@sbi.com",
    address:"123 Main Road",
    phoneno:"9876543210"
  },
];

function ABDetails() {
  return (
    <Container>
       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
        <Box>
          <h2>Authorised Banks</h2>
        </Box>
        <FormControl sx={{ width: 300 }} size="small">
          <InputLabel id="demo-simple-select-label">Choose State</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //value={age}
            label="Choose State"
            // onChange={handleChange}
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
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{
                '& .MuiTableCell-head': {
                  color: 'white',
                  backgroundColor: '#495057',
                },
              }}>
              <TableCell align="center">SL.NO.</TableCell>
              <TableCell align="center" colSpan={2}>
                Bank Name
              </TableCell>
              <TableCell align="center" colSpan={2}>
                Branch
              </TableCell>
              <TableCell align="center" colSpan={2}>
                Contact Person
              </TableCell>
              <TableCell align="center" colSpan={2}>
                Email
              </TableCell>
              <TableCell align="center" colSpan={2}>
                Address
              </TableCell>
              <TableCell align="center" colSpan={2}>
                Phone No
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bankDetails.map((row) => (
              <TableRow key={row.slno} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row" align="center">
                  {row.slno}
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  {row.name}
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  {row.branch}
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  {row.contactPerson}
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  {row.email}
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  {row.address}
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  {row.phoneno}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default ABDetails