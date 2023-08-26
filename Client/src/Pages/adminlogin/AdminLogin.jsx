import { useContext, useRef } from "react";
import "./login.css";
import { AuthContext } from "../../Context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { LoginCall } from "../../ApiCalls";
import {useNavigate} from "react-router-dom"


export default function Login() {
  const email = useRef();
  const password = useRef();
  const {user } = useContext(AuthContext)
  const { isFetching, dispatch } = useContext(AuthContext);
  const nav = useNavigate()
  
  const handleClick = (e) => {
    e.preventDefault()
      LoginCall({email : email.current.value , password : password.current.value},dispatch);
      console.log(user)
      if(user){
           nav("/homepage")
      }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Timetable Pro</h3>
          <span className="loginDesc">
            Gerez , Planifiez et Gagnez du temps dans vos etablissements.
          </span> 
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="password"
              type="password"
              required
              minLength="2"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" >
                Log In
            </button>
            <span className="loginForgot">forgot Password?</span>
            <button className="loginRegisterButton">
                new account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
