import React, { useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Importing CSS for styling

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  

    await signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
    
  
      const getData = await getDoc(doc(db, "users", userCredential.user.uid));
   
  
      localStorage.setItem("userId", userCredential.user.uid);
      localStorage.setItem("userData", JSON.stringify(getData.data()));

      
  
      navigate("/home"); 
    })
    .catch((err) => {
      console.log("Login error:", err);
      setErrorMessage(err.message); 
    });

  } 



  return (
    <div className='back' style={outerContainerStyle}>
      <div style={containerStyle}>
        <form style={formStyle}  onSubmit={handleLogin}>
          <h2 style={headerStyle}>Login</h2>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Email</label>
            <input
              style={inputStyle}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Password</label>
            <input
              style={inputStyle}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
          onClick={() => navigate('/home')}
            style={buttonStyle}
            type="submit"
          >
            Login
          </button>
          <a
            style={linkStyle}
            onClick={() => navigate('/signup')}
          >
            Don't have an account?
          </a>
          {errorMessage && <p style={errorStyle}>{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
}

const outerContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: '#f0f4f8',
  
};

const containerStyle = {
  width: '100%',
  maxWidth: '600px',
  boxSizing: 'border-box',
};

const formStyle = {
  padding: '50px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  transition: 'all 0.3s ease-in-out',
  boxSizing: 'border-box',
};

const headerStyle = {
  marginBottom: '1.5rem',
  fontSize: '1.75rem',
  fontWeight: '600',
  color: '#333',
};

const inputGroupStyle = {
  marginBottom: '1.25rem',
  textAlign: 'left',
};

const labelStyle = {
  display: 'block',
  marginBottom: '0.5rem',
  fontWeight: '500',
  color: '#555',
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  fontSize: '1rem',
  backgroundColor: '#f9fafb',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border 0.3s',
};

const buttonStyle = {
  width: '100%',
  padding: '14px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  fontSize: '1rem',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  boxSizing: 'border-box',
};

const linkStyle = {
  color: '#007bff',
  textDecoration: 'none',
  cursor: 'pointer',
};

const errorStyle = {
  color: 'red',
  marginTop: '1rem',
  textAlign: 'center',
  fontSize: '0.9rem',
};

export default Login;
