import './App.css'
import Signup from './Signup/Signup'
import Login from './Login/Login'
import { Route, Routes } from 'react-router-dom'

import Home from './Screens/Home/Home'
import About from './Screens/About/About'
import Contact from './Screens/Contact'
import Product from './Screens/Product'
import ContactForm from './Components/ContactForm'
import Form from './Components/Form'
import Cards from './Components/Card'
import RadioButtonComponent from './Components/RadioButton'
import Buttons from './Components/Buttons'
import Tables from './Components/Table'
import { createTheme, ThemeProvider } from '@mui/material'
import Main from './Screens/Main/Main'
import User from './Screens/User/User'
import Admin from './Screens/User/Admin/Admin'
import OurRoom from './Screens/OurRoom/OurRoom'
import Gallery from './Screens/Gallery/Gallery'
import AdminDashboard from './Screens/AdminDasboard/AdminDashboard'
import Booking from './Components/Booking/Booking'
import BookedRooms from './Components/BookedRoom/BookedRoom'
import ContactInfo from './Components/Contactin/Contactin'
import AdminLogin from './Screens/User/Admin/Adminlogin'
// import AuthState from './Routes/AuthState'
// import PrivRoute from './Routes/PrivState'


// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#1976d2', // A nice blue color
//     },
//     secondary: {
//       main: '#dc004e', // A nice red color
//     },
//   },
// });


function App() {
  

  return (
    <>
    {/* <ThemeProvider theme={theme}>
    <Tables />
  </ThemeProvider> */}


    
     <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/adminlogin" element={<AdminLogin />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/products" element={<Product/>}/>
      <Route path="/user" element={<User/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/ourroom" element={<OurRoom/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/admindashboard" element={<AdminDashboard/>}/>
      <Route path="/booking" element={<Booking/>}/>
      <Route path="/bookedrooms" element={<BookedRooms/>}/>
      <Route path="/contactinfo" element={<ContactInfo/>}/>
      
      </Routes>

      

      {/* <Routes>
        <Route element={<AuthState/>}>
          <Route path="/" element={<Signup/>}/>
          <Route path="/login" element={<Login />}/>
        </Route>

        <Route element={<PrivRoute/>}>
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/products" element={<Product/>}/>
            
        </Route>
        
      </Routes> */}

      
      
      
    </>
  )
}

export default App
