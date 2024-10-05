import React from 'react'
import './About.css'

import PersistentDrawerLeft2 from '../../Components/AdminHome/Navbar2'

const About = () => {
  return (
    <>

    <PersistentDrawerLeft2/>

    <h1 style={{backgroundColor:"#16423C", color:"white", textAlign:'center'}}>About us</h1>

    

        <div className="about-container">
            <div className="about-text">
        <h2>Who We Are</h2>
        <p>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.</p>
            </div>

            <div className="about-image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfc8P6r3V_OhzuI_ILV3eI2mP9ZuJSAJNuHg&s" alt="About Us" />
            </div>
    </div>

    
    
    </>
  )
}

export default About
