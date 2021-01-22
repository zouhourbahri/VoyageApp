import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginAgency } from "../../js/actions/Agence";
import NavbarAuth from "../Navbar/NavbarAuth";
import SideBar from "../SideBar/SideBar";
import Spinner from "../Spinner/Spinner";
import "./AgenceSignin.css"


const AgenceSignin = () => {
  const dispatch = useDispatch();

  //****** Get The Coordinates *******/
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loading = useSelector((state) => state.agenceReducer.loading);
  const logAgency = (e) => {
    e.preventDefault();
    dispatch(
      loginAgency({
        email,
        password,
      })
    );
  };
  return localStorage.getItem("token") ? (
    <Redirect to="/profilagence" />
  ) : (
    <div>
      <div>
      <SideBar />
      </div>
      {loading ? (
        // <h1> Loading ...</h1>
        <Spinner />
      ) : (
        <div className='signin'>
          <div className="login-box">
          <h2 style={{marginTop:'40px'}}>Login</h2>
          <form> 
            <div className="user-box">
            <input style={{height:'25px'}}
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email..."
            />
            <label> Email</label>
          </div>
          <div className="user-box">
            <input style={{height:'25px'}}
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password..."
            />
            <label> Password </label>
          </div>
          <button onClick={logAgency} className="coloring" style={{marginBottom:'30px'}}>
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
  );
};

export default AgenceSignin;
