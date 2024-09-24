import React from 'react'
import PersistentDrawerLeft from '../Components/Navbar'
import ContactForm from '../Components/ContactForm'
import PersistentDrawerLeft2 from '../Components/AdminHome/Navbar2'

const Contact = () => {
  return (
    <>

    <div>
      <PersistentDrawerLeft2/>
      
    </div>

    <div style={{marginTop:"100px"}}>
       <ContactForm/>
    </div>
    
    </>
  )
}

export default Contact
