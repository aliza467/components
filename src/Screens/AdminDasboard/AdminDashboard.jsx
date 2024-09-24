import React from 'react'
import PersistentDrawerLeft from '../../Components/Navbar'
import AdminHome from '../../Components/AdminHome/AdminHome'
import About from '../About/About'
import OurRoom from '../OurRoom/OurRoom'
import Gallery from '../Gallery/Gallery'
import Food from '../../Components/Food/Food'
import Footer from '../../Components/Footer/Footer'

const AdminDashboard = () => {
  return (
    <>

    <PersistentDrawerLeft/>

    <Food/>
    <Footer/>

    

    
    </>
  )
}

export default AdminDashboard
