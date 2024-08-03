import React from "react";
// import './components.css';
const NewsLetter = () => {
  return (
    <>
      <div className="newsletter">
        <h1>Get Exclusive offers on your email</h1>
        <p>Subscribe to our newsletter and stay update</p>

        <div className="info"> 
        
          <input type="email" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
