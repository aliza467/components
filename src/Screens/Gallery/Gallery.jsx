import React from 'react'
import PersistentDrawerLeft from '../../Components/Navbar'
import {
    Card,
    CardMedia,
    Container,
  } from '@mui/material';
import { styled } from '@mui/system';
import Footer from '../../Components/Footer/Footer';
import PersistentDrawerLeft2 from '../../Components/AdminHome/Navbar2';
import './Gallery.css'

const Gallery = () => {
    const StyledCard = styled(Card)(({ theme }) => ({
        maxWidth: 345,
        borderRadius: 16,
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }));

    return (
      <>
        <PersistentDrawerLeft2 />
        <h1 style={{ backgroundColor:"#16423C", color: "white", marginTop: "100px", textAlign:"center" }}>Gallery</h1>

        <Container sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 3, mt: 5 }}>
          {/* Displaying four cards in one line */}
          <StyledCard>
            <CardMedia
              component="img"
              alt="Card Image"
              height="200"
              image="https://png.pngtree.com/thumb_back/fh260/background/20210910/pngtree-sofa-home-hotel-room-interior-photography-map-with-map-image_849695.jpg"
              sx={{ borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}
            />
          </StyledCard>

          <StyledCard>
            <CardMedia
              component="img"
              alt="Card Image"
              height="200"
              image="https://wallpapers.com/images/hd/hotel-room-1815-x-1200-picture-43qdu67p14m5gkki.jpg"
              sx={{ borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}
            />
          </StyledCard>

          <StyledCard>
            <CardMedia
              component="img"
              alt="Card Image"
              height="200"
              image="https://png.pngtree.com/thumb_back/fh260/background/20210910/pngtree-sofa-home-hotel-room-interior-photography-map-with-map-image_849695.jpg"
              sx={{ borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}
            />
          </StyledCard>

          <StyledCard>
            <CardMedia
              component="img"
              alt="Card Image"
              height="200"
              image="https://www.oppeinhome.com/upload/image/product/thumb/20211009/white-grey-beige-modern-hotel-wood-grain1.jpg"
              sx={{ borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}
            />
          </StyledCard>

          <StyledCard>
            <CardMedia
              component="img"
              alt="Card Image"
              height="200"
              image="https://w0.peakpx.com/wallpaper/205/649/HD-wallpaper-hotel-room-interior-design-luxury-hotel-apartments-modern-interior-design-classic-style-luxury-chandelier.jpg"
              sx={{ borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}
            />
          </StyledCard>

          <StyledCard>
            <CardMedia
              component="img"
              alt="Card Image"
              height="200"
              image="https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2015/03/ladera-st-lucia.jpg?ssl=1"
              sx={{ borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}
            />
          </StyledCard>

          
        </Container>

             <div style={{width:"100%", marginTop:"100px"}}><Footer/></div> 
      </>
    )
}

export default Gallery;


