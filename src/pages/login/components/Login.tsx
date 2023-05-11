import React, { useState } from "react";
import { FaFacebookF, FaGooglePlusG, FaGithub } from "react-icons/fa";
import "../assets/login.css";
const Login = () => {
  const [logInValues, setLogInValues] = useState({ email: "", password: "" });
  const [toggle, setToggle] = useState(true);

  return (
    <div className="login-page">
      <div className={toggle ? "container" : "container right-panel-active"}>
        <div className="sign-up">
          <form action="#">
            <h1 className="login-title">Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <FaFacebookF size="20px" />
              </a>
              <a href="#" className="social">
                <FaGooglePlusG size="20px" />
              </a>
              <a href="#" className="social">
                <FaGithub size="20px" />
              </a>
            </div>
            <p> or use your email for registration</p>
            <input
              type="text"
              name="name"
              placeholder="Name"
              autoComplete="off"
              required
              value={logInValues.email}
              onChange={(element) =>
                setLogInValues({ ...logInValues, email: element.target.value })
              }
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              required
              value={logInValues.email}
              onChange={(element) =>
                setLogInValues({ ...logInValues, email: element.target.value })
              }
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={logInValues.password}
              onChange={(element) =>
                setLogInValues({
                  ...logInValues,
                  password: element.target.value,
                })
              }
            />
            <button>Sing Up</button>
          </form>
        </div>
        <div className="sign-in">
          <form action="#">
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social">
                <FaFacebookF size="20px" />
              </a>
              <a href="#" className="social">
                <FaGooglePlusG size="20px" />
              </a>
              <a href="#" className="social">
                <FaGithub size="20px" />
              </a>
            </div>
            <p>or use your account</p>
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              required
              value={logInValues.email}
              onChange={(element) =>
                setLogInValues({ ...logInValues, email: element.target.value })
              }
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
              required
              value={logInValues.password}
              onChange={(element) =>
                setLogInValues({
                  ...logInValues,
                  password: element.target.value,
                })
              }
            />
            <a href="#">Forget your password?</a>
            <button>Sing In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button id="signIn" onClick={() => setToggle(true)}>
                Sign In
              </button>
            </div>
            <div className="overlay-right">
              <h1>Hello, Friend</h1>
              <p>Enter your personal details and start journey with us lorem</p>
              <button id="signUp" onClick={() => setToggle(false)}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
