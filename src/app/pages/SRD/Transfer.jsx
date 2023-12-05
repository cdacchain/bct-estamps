import {Box,IconButton,Typography,styled,} from '@mui/material';
import { Breadcrumb, OrderListTable } from 'app/components';
import { useSelection } from 'app/hooks/use-selection';
import React, { useCallback, useMemo, useState } from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';

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

const columns = [
  { field: 'orderNo', headerName: 'Order No' },
  { field: 'bankName', headerName: 'Bank Name' },
  { field: 'branch', headerName: 'Branch' },
  { field: 'date', headerName: 'Date' },
  { field: 'status', headerName: 'Status' },
  { field: '', headerName: 'Edit' },
];
const rows = [
  {
    orderNo: '1',
    customer: 'Bank of Baroda',
    branch:"Branch 1",
    date: '28 Nov, 2023',
    status: 'Delivered',
    total: '20000',
  },
  {
    orderNo: '2',
    customer: 'Canara Bank',
    branch:"Branch 2",
    date: '28 Nov, 2023',
    status: 'Processing',
    total: '500000',
  }, {
    orderNo: '3',
    customer: 'Central Bank of India',
    branch:"Branch 3",
    date: '28 Nov, 2023',
    status: 'Delivered',
    total: '500000',
  }
 /* {
    orderNo: '1',
    customer: 'Ben Schieldman',
    product: 'Bit Bass Headphone',
    date: '28 Nov, 2023',
    status: 'Delivered',
    method: 'Paypal',
    total: '$15.25',
  },
  {
    orderNo: '2',
    customer: 'Joyce Watson',
    product: 'Comlion Watch',
    date: '28 Nov, 2023',
    status: 'Cancelled',
    method: 'Visa Card',
    total: '$75.25',
  },
  {
    orderNo: '3',
    customer: 'Kayle Brown',
    product: 'Beats Headphone',
    date: '28 Nov, 2023',
    status: 'Processing',
    method: 'Master Card',
    total: '$45.25',
  },
  {
    orderNo: '4',
    customer: 'Ven Helsing',
    product: 'BMW Bumper',
    date: '28 Nov, 2023',
    status: 'Delivered',
    method: 'Master Card',
    total: '$2145.25',
  },*/
];

function OrderList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const useCustomers = (page, rowsPerPage) => {
    return useMemo(() => {
      return applyPagination(rows, page, rowsPerPage);
    }, [page, rowsPerPage]);
  };

  const useCustomerIds = (customers) => {
    return useMemo(() => {
      return customers.map((customer) => customer.id);
    }, [customers]);
  };
  const customers = useCustomers(page, rowsPerPage);
  const customersIds = useCustomerIds(customers);
  const customersSelection = useSelection(customersIds);

  const handlePageChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const handleRowsPerPageChange = useCallback((event) => {
    setRowsPerPage(event.target.value);
  }, []);

  function applyPagination(documents, page, rowsPerPage) {
    return documents.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }



  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: 'Bank Transfer'}]}
        />
      </Box>
      <Box sx={{display:"flex",justifyContent:"space-between"}}>
        <Typography variant='h6'>All Orders</Typography>
        <IconButton><FilterListIcon/></IconButton>
      </Box>
      <OrderListTable
        count={rows.length}
        columns={columns}
        rows={rows}
        items={customers}
        onDeselectAll={customersSelection.handleDeselectAll}
        onDeselectOne={customersSelection.handleDeselectOne}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
        onSelectAll={customersSelection.handleSelectAll}
        onSelectOne={customersSelection.handleSelectOne}
        page={page}
        rowsPerPage={rowsPerPage}
        selected={customersSelection.selected}
      />
      {/* <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell align="center">{column.headerName}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.orderNo} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row" align='center'>
                  {row.orderNo}
                </TableCell>
                <TableCell align="center">{row.customer}</TableCell>
                <TableCell align="center">{row.product}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
                <TableCell align="center">{row.method}</TableCell>
                <TableCell align="center">{row.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
    </Container>
  );
}

export default OrderList;
