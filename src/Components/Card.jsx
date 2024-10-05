import React from 'react';
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
import { Navigate, useNavigate } from 'react-router-dom';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  borderRadius: 16,
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const Cards = ({image,description}) => {
  const navigate= useNavigate()
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
      <StyledCard>
        <CardMedia
          component="img"
          alt="Card Image"
          height="200"
          image={image}
          sx={{ borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}
        />
        <CardContent>
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
            Bed Room
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-between', paddingX: 2, paddingBottom: 2 }}>
          <Button onClick={()=>{navigate('/gallery')}} size="small" color="primary" variant="contained" sx={{ textTransform: 'none', fontWeight: 600 }}>
            More
          </Button>
          
        </CardActions>
      </StyledCard>
    </Container>

    
  );
};

export default Cards;
