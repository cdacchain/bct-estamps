import React from 'react';
import {
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
} from '@mui/material';
import WestIcon from '@mui/icons-material/West';

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

function ViewOrder() {
  const rows = [
    { orderNo: 1, denomination: '20', requestedNo: 100, approvedNo: 90,defacementNo:10 },
    { orderNo: 2, denomination: '50', requestedNo: 200, approvedNo: 180,defacementNo:20 },
    { orderNo: 3, denomination: '100', requestedNo: 100, approvedNo: 90,defacementNo:20 },
    { orderNo: 4, denomination: '200', requestedNo: 200, approvedNo: 180 ,defacementNo:20},
  ];
  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
        <Box sx={{ flexGrow: 1 }}>
          <a href='/orders/orderlist'>
            <WestIcon />
          </a>
        </Box>
        {/* <Box sx={{ width: '15%', display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="contained">Edit Invoice</Button>
          <Button variant="contained" sx={{ backgroundColor: 'orange', color: 'black' }}>
            Print Invoice
          </Button>
        </Box> */}
      </Box>
      <Box sx={{padding:"0.5rem"}}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
          <Box>
            <Typography sx={{ fontWeight: 'bold' }}>Order Info</Typography>
            <Typography>Order Number #1</Typography>
          </Box>
          <Box>
            <Typography sx={{ float: 'right' }}>
              <span>
                <b>Order Status:</b>
              </span>{' '}
              Delivered
            </Typography>
            <br />
            <Typography>
              <span>
                <b>Order Date:</b>
              </span>{' '}
              November 28, 2023
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider />
      {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
        <Box>
          <Typography>
            <b>Bill From</b>
          </Typography>
          <Typography>Test Corp.</Typography>
          <br />
          <Typography>test@test.in</Typography>
          <Typography> 8254 S. Garfield Street. Villa Rica, GA 30180.</Typography>
          <br />
          <Typography>+91-555-0170</Typography>
        </Box>
        <Box>
          <Typography>
            <b>Bill To</b>
          </Typography>
          <Typography>Test Ltd.</Typography>
          <br />
          <Typography>test@cdac.in</Typography>
          <Typography> 858 8th St. Nanuet, NY 10954.</Typography>
          <br />
          <Typography>+91-555-0170</Typography>
        </Box>
      </Box> */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell align='center'>#</TableCell>
              <TableCell align="center">Denomination</TableCell>
              <TableCell align="center">Requested Number</TableCell>
              <TableCell align="center">Approved Number</TableCell>
              <TableCell align="center">Defaced Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.orderNo}>
                <TableCell align="center">{row.orderNo}</TableCell>
                <TableCell align="center">{row.denomination}</TableCell>
                <TableCell align="center">{row.requestedNo}</TableCell>
                <TableCell align="center">{row.approvedNo}</TableCell>
                <TableCell align="center">{row.defacementNo}</TableCell>
              </TableRow>
            ))}
            {/* <TableRow>
              <TableCell colSpan={4} />
              <TableCell sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Box>
                  <Typography sx={{ padding: '0.5rem' }}>Subtotal</Typography>
                  <Typography sx={{ padding: '0.5rem' }}>Vat</Typography>
                  <Typography sx={{ padding: '0.5rem' }}>
                    <b>Grand Total</b>
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ padding: '0.5rem' }}>$34000</Typography>
                  <Typography sx={{ padding: '0.5rem' }}>10%</Typography>
                  <Typography sx={{ padding: '0.5rem' }}>
                    <b>$37400</b>
                  </Typography>
                </Box>
              </TableCell>
            </TableRow> */}
            {/* <TableRow>
              <TableCell colSpan={3} />
              <TableCell align="center">Vat</TableCell>
              <TableCell align="center">10%</TableCell>
            </TableRow> */}
            {/* <TableRow>
              <TableCell colSpan={3} />
              <TableCell align="center"><b>Grand Total</b></TableCell>
              <TableCell align="center"><b>$37400</b></TableCell>
            </TableRow> */}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default ViewOrder;
