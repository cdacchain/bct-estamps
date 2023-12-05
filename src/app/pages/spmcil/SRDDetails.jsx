import {
  Paper,
  Switch,
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

function SRDDetails() {
  const srdData = [
    { slno: 1, state: 'Telangana', address: '123 Main Road' },
    { slno: 2, state: 'Punjab', address: '234 Main Road' },
    { slno: 3, state: 'Maharastra', address: '345 Main Road' },
  ];
  return (
    <Container>
      <h2>State Revenue Departments</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow
              sx={{
                '& .MuiTableCell-head': {
                  color: 'white',
                  backgroundColor: '#495057',
                },
              }}
            >
              <TableCell align="center">SL.NO.</TableCell>
              <TableCell align="center" colSpan={2}>
                State
              </TableCell>
              <TableCell align="center" colSpan={2}>
                Address
              </TableCell>
              <TableCell align="center" colSpan={2}>
                Enable
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {srdData.map((row) => (
              <TableRow key={row.slno} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row" align="center">
                  {row.slno}
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  {row.state}
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  {row.address}
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  <Switch defaultChecked size="small" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default SRDDetails;
