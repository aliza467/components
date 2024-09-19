import './App.css'
import Signup from './Signup/Signup'
import Login from './Login/Login'
import { Route, Routes } from 'react-router-dom'

import Home from './Screens/Home'
import About from './Screens/About'
import Contact from './Screens/Contact'
import Product from './Screens/Product'
import ContactForm from './Components/ContactForm'
import Form from './Components/Form'
import Cards from './Components/Card'
import RadioButtonComponent from './Components/RadioButton'
import Buttons from './Components/Buttons'
import Tables from './Components/Table'
import { createTheme, ThemeProvider } from '@mui/material'
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
      <Route path="/" element={<Signup/>}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/products" element={<Product/>}/>
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
