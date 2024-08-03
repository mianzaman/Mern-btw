import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };

  return (
    <div className="login-signup">
      <div className="login-signup-container">
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <div className="login-signup-fields">
            <input
              name="name"
              value={input.name}
              onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
              type="text"
              placeholder="Username"
            />
            <input
              name="email"
              value={input.email}
              onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
              type="email"
              placeholder="Email"
            />
            <input
              name="password"
              value={input.password}
              onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="agree">
            <input type="checkbox" />
            <p>
              I agree to the <span>Terms</span> and <span>Privacy Policy</span>
            </p>
          </div>
          <p className="login-signup-login">
            Already have an account? <span onClick={() => navigate("/login")}>Login</span>
          </p>
          <button>Continue</button>
          
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;