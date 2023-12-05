import {
  Box,
  IconButton,
  Modal,
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
import React from 'react';
import PrintIcon from '@mui/icons-material/Print';
import Swal from 'sweetalert2';

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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function DefacementHistory() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const rows = [
    {
      id: 1,
      denomination: '20',
      spuniqueno: 11111,
      bctuniqueno: 11111,
      status:"Deface",
      dt: '01-02-2000',
    },
    {
        id: 2,
        denomination: '50',
        spuniqueno: 555555,
        bctuniqueno: 555555,
        status:"Void",
        dt: '01-02-2000',
      },
  ];
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
              <TableCell align="center">Denomination</TableCell>
              <TableCell align="center">SPMCIL Unique No</TableCell>
              <TableCell align="center">BCT Unique No</TableCell>
              <TableCell align="center">Deface Time</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row" align="center">
                  {row.denomination}
                </TableCell>
                <TableCell align="center">{row.spuniqueno}</TableCell>
                <TableCell align="center">{row.bctuniqueno}</TableCell>
                <TableCell align="center">{row.dt}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
                <TableCell align="center">
                  <IconButton
                    onClick={() => {
                      Swal.fire({
                        icon: 'warning',
                        text: 'Was the print successful?',
                        showCancelButton: true,
                        confirmButtonText:"Yes",
                        cancelButtonText:"No"
                      });
                    }}
                    disabled={row.status==="Void"}
                  >
                    <PrintIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Was the print successful or not
          </Typography>
        </Box>
      </Modal> */}
    </Container>
  );
}

export default DefacementHistory;
