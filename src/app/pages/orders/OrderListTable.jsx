import {
  Checkbox,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import EastIcon from '@mui/icons-material/East';

function OrderListTable(props) {
  console.log(props);
  const {
    count = 0,
    items = [],
    onDeselectAll,
    onDeselectOne,
    onPageChange = () => {},
    onRowsPerPageChange,
    onSelectAll,
    onSelectOne,
    page = 0,
    rowsPerPage = 0,
    selected = [],
  } = props;
  const selectedSome = selected.length > 0 && selected.length < items.length;
  const selectedAll = items.length > 0 && selected.length === items.length;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
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
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center" sx={{ color: `${chipColor}` }}>
                  {row.status}
                </TableCell>
                <TableCell align="center">
                  <a href='/orders/vieworder'>
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
  );
}

export default OrderListTable;
