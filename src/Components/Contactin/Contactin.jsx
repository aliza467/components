import React, { useState, useEffect } from 'react';
import { Container, Table, TableBody, TableCell, TableHead, TableRow, Typography, Paper } from '@mui/material';
import Footer from '../Footer/Footer';
import PersistentDrawerLeft from '../Navbar';

const ContactInfo = () => {
  const [contactMessages, setContactMessages] = useState([]);

  useEffect(() => {
    // Retrieve contact messages from localStorage
    const storedMessages = JSON.parse(localStorage.getItem('contactMessages')) || [];
    setContactMessages(storedMessages);
  }, []);

  return (

    <>
    <PersistentDrawerLeft />
    <Container style={{marginTop:"200px", marginBottom:"150px"}} maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Information
      </Typography>
      {contactMessages.length > 0 ? (
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Message</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contactMessages.map((message, index) => (
                <TableRow key={index}>
                  <TableCell>{message.name}</TableCell>
                  <TableCell>{message.email}</TableCell>
                  <TableCell>{message.message}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      ) : (
        <Typography align="center" color="textSecondary">
          No contact messages available.
        </Typography>
      )}
    </Container>
    <Footer/>
    </>
  );
};

export default ContactInfo;

