
import React from 'react'
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Box,
    CardActions,
    Container,
  } from '@mui/material';
  import { styled } from '@mui/system';

const AdminHome = () => {
    
  return (
    <div>
        <div className='dash'>
        <Button style={{
            backgroundColor:"lightgray", padding:"15px"
        }} className='btn-primary'>Add Room</Button>
        <Button style={{
            backgroundColor:"lightgray", padding:"15px"
        }} className='btn-primary'>Booked Rooms </Button>

        </div>
        
    </div>
  )
}

export default AdminHome 

