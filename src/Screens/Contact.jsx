import React from 'react'
import PersistentDrawerLeft from '../Components/Navbar'
import ContactForm from '../Components/ContactForm'
import PersistentDrawerLeft2 from '../Components/AdminHome/Navbar2'
import Footer from '../Components/Footer/Footer'

const Contact = () => {
  return (
    <>

    <div>
      <PersistentDrawerLeft2/>
      
    </div>

    <div style={{marginTop:"100px" ,marginBottom:"50px"}}>
       <ContactForm/>
    </div>

    <Footer/>
    
    </>
  )
}

export default Contact
