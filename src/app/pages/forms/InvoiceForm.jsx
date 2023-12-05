import React from 'react';
import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  //Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
  styled,
} from '@mui/material';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

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

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

function InvoiceForm() {
  //const [rowData, setRowData] = React.useState([]);
  const firstList = [
    'customer 1',
    'customer 2',
    'customer 3',
    'customer 4',
    'customer 5',
    'customer 6',
    'customer 7',
    'customer 8',
  ];
  const termsList = [
    'NET 15',
    'NET 30',
    'NET 45',
    'NET 60',
    'Due end of the month',
    'Due on receive',
  ];
  function addNewRowHandler() {}
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container>
        <Typography sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>New Invoice</Typography>
        <br />
        <Divider />
        <br />
        <Box
          sx={{
            display: 'flex',
            width: '40%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography>Customer Name</Typography>
          <FormControl sx={{ width: '40%' }} size="small">
            <InputLabel id="demo-simple-select-label">Name</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              //value={age}
              label="Name"
              //onChange={handleChange}
            >
              {firstList.map((data) => (
                <MenuItem key={data} value={data}>
                  {data}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <br />
        <Box
          sx={{
            display: 'flex',
            width: '40%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography>Invoice #</Typography>
          <TextField
            id="outlined-basic"
            label="Invoice No"
            variant="outlined"
            size="small"
            defaultValue="INV-000001"
            sx={{ width: '40%' }}
          />
        </Box>
        <br />
        <Box
          sx={{
            display: 'flex',
            width: '40%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography>Order Number</Typography>
          <TextField
            id="outlined-basic"
            label="Order No"
            variant="outlined"
            size="small"
            sx={{ width: '40%' }}
          />
        </Box>
        <br />
        <Box
          sx={{
            display: 'flex',
            width: '80%',
            //justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ width: '30%' }}>Invoice Date</Typography>
          <Box
            sx={{
              width: '70%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <DatePicker label="Invoice Date" slotProps={{ textField: { size: 'small' } }} />
            <FormControl sx={{ width: '20%' }} size="small">
              <InputLabel id="demo-simple-select-label">Term</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                //value={age}
                label="Age"
                //onChange={handleChange}
              >
                {termsList.map((data) => (
                  <MenuItem key={data} value={data}>
                    {data}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <DatePicker label="Due Date" slotProps={{ textField: { size: 'small' } }} />
          </Box>
        </Box>
        <br />
        <Divider />
        <br />
        <Box
          sx={{
            display: 'flex',
            width: '40%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography>Saleperson Name</Typography>
          <FormControl sx={{ width: '40%' }} size="small">
            <InputLabel id="demo-simple-select-label">Saleperson Name</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              //value={age}
              label="Saleperson Name"
              //onChange={handleChange}
            >
              {firstList.map((data) => (
                <MenuItem key={data} value={data}>
                  {data}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <br />
        <Divider />
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell colSpan={3}>ItemDetails</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Rate</TableCell>
              <TableCell align="right">Discount</TableCell>
              <TableCell align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/*rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))*/}
            <TableRow sx={{ 'td, th': { border: 0 } }}>
              <TableCell colSpan={7}>
                <Button variant="contained" onClick={addNewRowHandler}>
                  +Add New Item
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={4} sx={{ border: 0 }}>
                <TextField placeholder="Custom Notes" multiline rows={7} fullWidth />
              </TableCell>
              <TableCell colSpan={3}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    py: 2,
                  }}
                >
                  <Typography>Sub Total</Typography>
                  <Typography>0.00</Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    py: 2,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ mr: 2 }}>Shipping Charges</Typography>
                    <TextField size="small" />
                  </Box>
                  <Typography>0.00</Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    py: 2,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <TextField size="small" sx={{ mr: 2 }} defaultValue="Adjustment" />
                    <TextField size="small" />
                  </Box>
                  <Typography>0.00</Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    py: 2,
                  }}
                >
                  <Typography sx={{ fontWeight: 'bold' }}>Total</Typography>
                  <Typography>0.00</Typography>
                </Box>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Box sx={{ display: 'flex', mt: 1, pb: 1 }}>
          <TextField
            placeholder="Custom Notes"
            multiline
            rows={4}
            fullWidth
            sx={{ width: '50%', m: 5 }}
          />
          <Box sx={{ mt: 5 }}>
            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
              Upload file
              <VisuallyHiddenInput type="file" />
            </Button>
          </Box>
        </Box>
        <Box>
          <Button variant="contained">Submit</Button>
        </Box>
      </Container>
    </LocalizationProvider>
  );
}

export default InvoiceForm;
