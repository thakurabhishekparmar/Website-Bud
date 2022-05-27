import { useContext, useRef, useState } from "react";
import { useNavigate } from "react";
import "./Login.css";

import { CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();

  const email = useRef();
  const password = useRef();
  const [isFetching, setIsFetching] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    /* loginCall(
       { email: email.current.value, password: password.current.value },
       dispatch
     );*/
  };

  const handleLogin = () => {
    console.log("login pressed");
    history.push("/home");
    // window.location.url = "/home";
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">BudTracker</h3>
          <span className="loginDesc">Stay Updated With Your Team.</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button
              className="loginButton"
              type="submit"
              disabled={isFetching}
              onClick={handleLogin}
            >
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}