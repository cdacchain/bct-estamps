import styled from '@emotion/styled';
import {
  Box,
  Button,
  IconButton,
  Input,
  Modal,
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
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import TestData from './TestData.pdf';

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
  border: '2px solid red',
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ViewOrders() {
  const rows = [
    {
      orderNo: 1,
      orderDate: '20-07-2002',
      state: 'Punjab',
      bankName: 'Punjab National Bank',
      branch: 'Branch 1',
      status: 'Generated',
    },
    {
      orderNo: 2,
      orderDate: '20-08-2002',
      state: 'Tamil Nadu',
      bankName: 'Bank of Maharashtra',
      branch: 'Branch 2',
      status: 'Received',
    },
    {
      orderNo: 3,
      orderDate: '20-09-2002',
      state: 'Maharastra',
      bankName: 'State Bank of India',
      branch: 'Branch 3',
      status: 'Pending',
    },
    {
      orderNo: 4,
      orderDate: '20-10-2002',
      state: 'Gujurat',
      bankName: 'Union Bank of India',
      branch: 'Branch 4',
      status: 'Received',
    },
  ];
  const orderDetailsData = [
    { orderNo: 1, denomination: 10, requiredNo: 20 },
    { orderNo: 2, denomination: 20, requiredNo: 50 },
    { orderNo: 3, denomination: 50, requiredNo: 10 },
  ];
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [openChild, setOpenChild] = React.useState(false);
  const handleOpenChild = () => {
    setOpenChild(true);
  };
  const handleCloseChild = () => {
    setOpenChild(false);
  };
  return (
    <Container>
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
              <TableCell align="center">Order No.</TableCell>
              <TableCell align="center">State</TableCell>
              <TableCell align="center">Bank Name</TableCell>
              <TableCell align="center">Branch</TableCell>
              <TableCell align="center">Order Date</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">QR Code</TableCell>
              <TableCell align="center">View Details</TableCell>
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
                <TableCell align="center">{row.orderDate}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
                <TableCell align="center">
                  {row.status === 'Generated' ? (
                    <IconButton>
                      <a href={TestData} download="testfile.pdf">
                        <PictureAsPdfIcon />
                      </a>
                    </IconButton>
                  ) : (
                    'NA'
                  )}
                </TableCell>
                <TableCell align="center">
                  <IconButton onClick={handleOpen}>
                    <MoreHorizIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={rows.length}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </TableContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 800 }}>
          <h2 id="parent-modal-title">Order Details</h2>
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
                  <TableCell align="center">Order No.</TableCell>
                  <TableCell align="center">Denomination</TableCell>
                  <TableCell align="center">Required</TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orderDetailsData.map((row) => (
                  <TableRow
                    key={row.orderNo}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="center">
                      {row.orderNo}
                    </TableCell>
                    <TableCell align="center">{row.denomination}</TableCell>
                    <TableCell align="center">{row.requiredNo}</TableCell>
                    <TableCell align="center">
                      <Button onClick={handleOpenChild}>Upload unique IDs</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {/* <TablePagination
              component="div"
              count={rows.length}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              page={page}
              rowsPerPage={rowsPerPage}
              rowsPerPageOptions={[5, 10, 25]}
            /> */}
          </TableContainer>
        </Box>
      </Modal>
      <Modal
        open={openChild}
        //onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="child-modal-title">Upload unique IDs</h2>
          <Box
            sx={{
              border: '3px dashed black',
              borderRadius: 7,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mt: 2,
              mb: 2,
              pt: 1,
            }}
          >
            <CloudUploadIcon />
            <p>Upload .xlsx files</p>
            <VisuallyHiddenInput type="file" accept=".xlsx" />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button onClick={handleCloseChild}>Close</Button>
            <Button variant="contained" onClick={handleCloseChild}>
              Upload
            </Button>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
}

export default ViewOrders;
