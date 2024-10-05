import React from 'react';
import './Main.css'; // Importing CSS for styling
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === 'user') {
      navigate('/user');
    } else if (selectedValue === 'admin') {
      navigate('/admin');
    }
  };

  return (
    <>
      <div className="app">
        <div className="welcome-container">
          <h1 className="welcome-text">Welcome to Our Hotel</h1>
          <h3 className="welcome-text">Discover our world's #1 Luxury Room For VIP.</h3>
        </div>

        <div className="dropdown-container">
          <select className="dropdown" defaultValue="" onChange={handleNavigate}>
            <option selected value="" disabled>
              Login As
            </option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
            
          </select>
        </div>
      </div>
    </>
  );
};

export default Main;

