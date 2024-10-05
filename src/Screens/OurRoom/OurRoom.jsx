import React from 'react'
import PersistentDrawerLeft from '../../Components/Navbar'
import Cards from '../../Components/Card'
import './OurRoom.css'
import Footer from '../../Components/Footer/Footer'
import PersistentDrawerLeft2 from '../../Components/AdminHome/Navbar2'

const OurRoom = () => {
  return (
    <>

    <PersistentDrawerLeft2/>

    <h1 style={{backgroundColor:"#16423C", color:"white", marginTop:"100px", textAlign:"center"}}>Our Rooms</h1>

    <div className="card-row">
      <Cards image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCnIpdLOMSAcmTIAv-2IJ6BQFBOO-ma5bO5Q&s"}/>
      <Cards image={"https://t3.ftcdn.net/jpg/06/19/00/08/360_F_619000872_AxiwLsfQqRHMkNxAbN4l5wg1MsPgBsmo.jpg"}/>
      <Cards image={"https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill"}/>
      <Cards image={"https://plus.unsplash.com/premium_photo-1675615667752-2ccda7042e7e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbXN8ZW58MHx8MHx8fDA%3D"}/>
      <Cards image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8o_kP1LKpS4_w7yk27jEbWMinD6-CI2jAaQ&s"}/>
      <Cards image={"https://cf.bstatic.com/xdata/images/hotel/max1024x768/558220398.jpg?k=63ed1bfea9310796b7f7604feebe90775821d48cc0dbc5fb903e8ff9aa108955&o=&hp=1"}/>
      
      
    </div>

    </>


  )
}
export default OurRoom

