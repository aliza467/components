import React, { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  
  const handleSignup = async (e) => {
    e.preventDefault();
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const uID = userCredential.user.uid;
    const userObj = {
        name,
        email,
      };

      await setDoc(doc(db, 'users', uID), userObj);

     navigate('/login');

    } catch (error) {
      console.error('Error during signup:', error);
      setErrorMessage(error.message);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={formWrapperStyle}>
        <form style={formStyle} onSubmit={handleSignup}>
          <h1 style={headerStyle}>Create Your Account</h1>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Full Name</label>
            <input
              placeholder="Enter your full name"
              style={inputStyle}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Email Address</label>
            <input
              placeholder="Enter your email"
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
              placeholder="Create a password"
              style={inputStyle}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <p style={alreadyHaveAccountStyle}>
            Already have an account?{' '}
            <a onClick={() => navigate('/login')} href="#" style={linkStyle}>
              Log In
            </a>
          </p>
          <button style={buttonStyle} type="submit">
            Sign Up
          </button>
          {errorMessage && <p style={errorStyle}>{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
}

// Styles
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: '#f0f4f8',
};

const formWrapperStyle = {
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

const alreadyHaveAccountStyle = {
  fontSize: '0.9rem',
  color: '#666',
  marginBottom: '1.5rem',
};

const linkStyle = {
  color: '#007bff',
  textDecoration: 'none',
  cursor: 'pointer',
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

const errorStyle = {
  color: 'red',
  marginTop: '1rem',
  textAlign: 'center',
  fontSize: '0.9rem',
};

export default Signup;
