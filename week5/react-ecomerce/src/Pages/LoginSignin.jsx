import React, { useState } from "react";
import './index.css';
import { useNavigate } from "react-router-dom";

const LoginSignin = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if(input.email === loggeduser.email && input.password=== loggeduser.password)
      {
        navigate("/home");
      }
    else
    {
      alert("Invalid Credentials");
    }
  };
  return (
    <>
      <div className="login-signup">
        <div className="login-signin-container">
          <form onSubmit={handleLogin}>
            <h1>Login</h1>
            <div className="login-signup-fields">
              
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
              Already have an account? <span onClick={() => navigate("/register")}>Register Here</span>
            </p>
            <button>Continue</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginSignin;
