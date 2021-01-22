import React , { useState }from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../js/actions";
import SideBar from "../SideBar/SideBar";
import Spinner from "../Spinner/Spinner";
import "./Signin.css"


const Signin = () => {
  const dispatch = useDispatch();

  //***** Get the coordinates *****/
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loading = useSelector((state) => state.userReducer.loading);
  const user = useSelector(state => state.userReducer.user);
  const log = (e) => {
    e.preventDefault();
    dispatch(
      login({
        email,
        password,
      })
    );
    setEmail("");
    setPassword("");
  };
  return localStorage.getItem("token") ? (
    <Redirect to="/profil" />
  ) : (
    <div>
      <SideBar />
    <div>
      {loading ? (
        // <h1> Loading ... </h1>
        <Spinner />
      ) : (
        <div className="signin">
        <div className="login-box">
          <h2 style={{marginTop:'10px'}}>Login</h2>
          <form>
          <div className="user-box">
            <input style={{height:'20px'}}
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email..."
            />
            <label> Email</label>
          </div>
          <div className="user-box">
            <input style={{height:'20px'}}
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password..."
            />
            <label> Password </label>
          </div>
          <button onClick={log}> 
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          login
          </button>
          </form>
        </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Signin;
