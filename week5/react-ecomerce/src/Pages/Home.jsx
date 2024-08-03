import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleShopNow = () => {
    navigate('/shop');
  };

  return (
    <div className="home-container">
      <div className="welcome-box">
        <h1>Welcome to Shopper</h1>
        <p>Welcome, User</p>
        <div className="button-group">
          <button onClick={handleLogout}>Logout</button>
          <button onClick={handleShopNow}>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
