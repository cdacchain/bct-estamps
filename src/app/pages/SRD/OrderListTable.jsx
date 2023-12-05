import {
  Box,
  Checkbox,
  IconButton,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import EastIcon from '@mui/icons-material/East';

const style = {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function OrderListTable(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const avaData = [
    {
      denomination: 20,
      required: 100,
      available: 80,
      pending: 20,
    },
    {
      denomination: 50,
      required: 100,
      available: 80,
      pending: 20,
    },
    {
      denomination: 100,
      required: 100,
      available: 80,
      pending: 20,
    },
    {
      denomination: 200,
      required: 100,
      available: 80,
      pending: 20,
    },
  ];
  const {
    count = 0,
    items = [],
    onPageChange = () => {},
    onRowsPerPageChange,
    page = 0,
    rowsPerPage = 0,
    selected = [],
  } = props;
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{
                '& .MuiTableCell-head': {
                  color: 'white',
                  backgroundColor: '#495057',
                },
              }}>
              {props.columns.map((column) => (
                <TableCell key={column.field} align="center">
                  {column.headerName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((row) => {
              const isSelected = selected.includes(row.orderNo);
              let chipColor = '';
              if (row.status === 'Delivered') {
                chipColor = 'green';
              }
              if (row.status === 'Cancelled') {
                chipColor = 'red';
              }
              if (row.status === 'Processing') {
                chipColor = 'orange';
              }

              return (
                <TableRow
                  key={row.orderNo}
                  hover
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {row.orderNo}
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    {row.customer}
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    {row.branch}
                  </TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell align="center" sx={{ color: `${chipColor}` }}>
                    {row.status}
                  </TableCell>
                  <TableCell align="center">
                    <a href="/srd/bankrequestview">
                      <EastIcon />
                    </a>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={count}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </TableContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Details
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align='center'>Denomination</TableCell>
                <TableCell align='center'>Available</TableCell>
                <TableCell align='center'>Requested</TableCell>
                <TableCell align='center'>Pending</TableCell>
              </TableRow>
            </TableHead>
            {avaData.map((data) => (
              <TableRow key={data.denomination}>
                <TableCell align='center'>{data.denomination}</TableCell>
                <TableCell align='center'>{data.available}</TableCell>
                <TableCell align='center'>{data.required}</TableCell>
                <TableCell align='center'>{data.pending}</TableCell>
              </TableRow>
            ))}
          </Table>
        </Box>
      </Modal>
    </>
  );
}

export default OrderListTable;
