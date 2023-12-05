import {
  Button,
  Paper,
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

function TransferPaper() {
  const rows = [
    { orderNo: 1, state: 'Punjab', bankName: 'Punjab National Bank',branch:'Branch 1',address:'123 Main Road',totalPaper: 200 },
    { orderNo: 2, state: 'Maharastra', bankName: 'Bank of Maharashtra',branch:'Branch 2',address:'234 Main Road', totalPaper: 100 },
    { orderNo: 3, state: 'Telegana', bankName: 'State Bank of India',branch:'Branch 3',address:'345 Main Road', totalPaper: 100 },
    { orderNo: 4, state: 'Odisha', bankName: 'Union Bank of India',branch:'Branch 4',address:'567 Main Road',totalPaper: 100 },
  ];
  return (
    <Container>
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
              <TableCell align="center">State</TableCell>
              <TableCell align="center">Bank Name</TableCell>
              <TableCell align="center">Branch</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="center">Total No of Papers</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.orderNo}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {row.orderNo}
                </TableCell>
                <TableCell align="center">{row.state}</TableCell>
                <TableCell align="center">{row.bankName}</TableCell>
                <TableCell align="center">{row.branch}</TableCell>
                <TableCell align="center">{row.address}</TableCell>
                <TableCell align="center">{row.totalPaper}</TableCell>
                <TableCell align="center">
                  <Button>Initiate</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default TransferPaper;
