
import PersistentDrawerLeft2 from '../../Components/AdminHome/Navbar2';
import Food from '../../Components/Food/Food';
import PersistentDrawerLeft from '../../Components/Navbar'
import About from '../About/About';
import Gallery from '../Gallery/Gallery';
import OurRoom from '../OurRoom/OurRoom';
import './Home.css'
import  { useState } from 'react';

const Home = () => {

  return (
    <>

    <PersistentDrawerLeft2/>

    <div className='dash'>
      <div className='text'>
        Welcome to Rove Hotel.

      </div>
    </div>
    

     <About/>
    <OurRoom/>
    <Food/>
    <Gallery/> 
    
    </>
  )
}

export default Home
