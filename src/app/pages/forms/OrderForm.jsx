import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Rating,
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
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

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

function OrderForm() {
  const [newRow, setNewRow] = useState(false);
  const [quantities, setQuantities] = useState('');
  const [denomination, setDenominations] = useState('');
  const [rows, setRows] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  const calculateTotal = (product, quantity) => {
    return product.productPrice * quantity;
  };

  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '5rem' }}>
        <Box>
          <Typography variant="h5">
            <b>Order #1028</b>
          </Typography>
        </Box>
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
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Total Cost</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="center">{row.denomination}</TableCell>
                <TableCell align="center">{row.quantities}</TableCell>
                <TableCell align="center">{row.denomination * row.quantities}</TableCell>
                <TableCell align="center">
                  <IconButton>
                    <CloseIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {newRow && (
              <TableRow>
                <TableCell>
                  <FormControl fullWidth>
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
                <TableCell align='center'>
                  <TextField
                    type="number"
                    value={quantities}
                    onChange={(e) => setQuantities(e.target.value)}
                  />
                </TableCell>
                <TableCell></TableCell>
                <TableCell align="center">
                  <IconButton onClick={() => setNewRow(false)}>
                    <CloseIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      setNewRow(false);
                      setRows((prev) => {
                        return [...prev, { denomination, quantities }];
                      });
                    }}
                  >
                    <CheckIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            )}
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell colSpan={3}>
                <Box sx={{ mx: 5 }}>
                  <Button variant="contained" onClick={() => setNewRow(true)}>
                    +Add Denomination
                  </Button>
                </Box>
              </TableCell>
              <TableCell colSpan={1}>
                {/* <Box>
                  <Box sx={{ paddingX: '2rem' }}>
                    <Typography sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>
                      Bill Details
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography sx={{ color: 'gray' }}>Subtotal:</Typography>
                      <Typography sx={{ fontWeight: 'bold', color: 'green' }}>
                        {subtotal}
                      </Typography>
                    </Box>
                  </Box>
                </Box> */}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{display:"flex",justifyContent:"flex-end",mt:5}}>
        <Button variant='contained'>Generate Order</Button>
      </Box>
    </Container>
  );
}

export default OrderForm;
