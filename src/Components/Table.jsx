import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Typography,
  Box,
  IconButton,
  Tooltip
} from '@mui/material';
import { styled } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '1rem',
  color: theme.palette.primary.main,
  padding: '12px 16px',
}));

const CustomTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:hover': {
    backgroundColor: theme.palette.action.selected,
  },
}));

const Tables = () => {
  const [rows, setRows] = useState([
    { name: 'John Doe', age: 28, department: 'Engineering', role: 'Developer', location: 'New York' },
    { name: 'Jane Smith', age: 32, department: 'Marketing', role: 'Manager', location: 'San Francisco' },
    { name: 'Michael Brown', age: 22, department: 'Sales', role: 'Salesperson', location: 'Chicago' },
    { name: 'Emily Davis', age: 30, department: 'HR', role: 'HR Specialist', location: 'Seattle' },
  ]);

  const handleDelete = (index) => {
    setRows((prevRows) => prevRows.filter((_, i) => i !== index));
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" align="center" sx={{ fontWeight: 'bold' }}>
          Employee Details
        </Typography>
      </Box>
      <TableContainer component={Paper} elevation={3} sx={{ width: '100%' }}>
        <Table sx={{ width: '100%' }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Age</StyledTableCell>
              <StyledTableCell align="right">Department</StyledTableCell>
              <StyledTableCell align="right">Role</StyledTableCell>
              <StyledTableCell align="right">Location</StyledTableCell>
              <StyledTableCell align="right">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <CustomTableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">{row.department}</TableCell>
                <TableCell align="right">{row.role}</TableCell>
                <TableCell align="right">{row.location}</TableCell>
                <TableCell align="right">
                  <Tooltip title="Delete">
                    <IconButton color="error" onClick={() => handleDelete(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </CustomTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Tables;


