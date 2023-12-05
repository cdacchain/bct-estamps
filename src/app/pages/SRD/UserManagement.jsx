import {
  Box,
  IconButton,
  Paper,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  styled,
} from '@mui/material';
import React from 'react';
import EastIcon from '@mui/icons-material/East';
import { Breadcrumb } from 'app/components';

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

function UserManagement() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const totalUsers = [
    {
      name: 'Rajesh',
      bankName: 'Bank of Baroda',
      branch: 'Branch 1',
      address: '123 Main Road',
      contact: '+91-9876543210',
    },
    {
      name: 'Rakesh',
      bankName: 'Bank of India',
      branch: 'Branch 1',
      address: '123 Main Road',
      contact: '+91-9876543210',
    },
    {
      name: 'John',
      bankName: 'Bank of Maharashtra',
      branch: 'Branch 1',
      address: '123 Main Road',
      contact: '+91-9876543210',
    },
    {
      name: 'Thomas',
      bankName: 'Canara Bank',
      branch: 'Branch 1',
      address: '123 Main Road',
      contact: '+91-9876543210',
    },
    {
      name: 'Sachin',
      bankName: 'Central Bank of India',
      branch: 'Branch 1',
      address: '123 Main Road',
      contact: '+91-9876543210',
    },
    {
      name: 'Pritish',
      bankName: 'Indian Bank',
      branch: 'Branch 1',
      address: '123 Main Road',
      contact: '+91-9876543210',
    },
    {
      name: 'James',
      bankName: 'Indian Overseas Bank',
      branch: 'Branch 1',
      address: '123 Main Road',
      contact: '+91-9876543210',
    },
    {
      name: 'Rocky',
      bankName: 'Punjab National Bank',
      branch: 'Branch 1',
      address: '123 Main Road',
      contact: '+91-9876543210',
    },
    {
      name: 'Aditya',
      bankName: 'Union Bank of India',
      branch: 'Branch 1',
      address: '123 Main Road',
      contact: '+91-9876543210',
    },
    {
      name: 'Bijaya',
      bankName: 'UCO Bank',
      branch: 'Branch 1',
      address: '123 Main Road',
      contact: '+91-9876543210',
    },
    {
      name: 'Abhinash',
      bankName: 'State Bank of India',
      branch: 'Branch 1',
      address: '123 Main Road',
      contact: '+91-9876543210',
    },
  ];
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'User Management' }]} />
      </Box>
      <h1>All Users</h1>
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
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Bank Name</TableCell>
              <TableCell align="center">Branch</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="center">Contact Details</TableCell>
              <TableCell align="center">Enable</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {totalUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row" align="center">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.bankName}</TableCell>
                <TableCell align="center">{row.branch}</TableCell>
                <TableCell align="center">{row.address}</TableCell>
                <TableCell align="center">{row.contact}</TableCell>
                <TableCell align="center">
                  <Switch defaultChecked size="small" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={totalUsers.length}
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
    </Container>
  );
}

export default UserManagement;
