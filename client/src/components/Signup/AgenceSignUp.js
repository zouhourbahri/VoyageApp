import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { registerAgency } from "../../js/actions/Agence";
import NavbarAuth from "../Navbar/NavbarAuth";
import SideBar from "../SideBar/SideBar";
import Spinner from "../Spinner/Spinner";
import "./AgenceSignUp.css";

//import files

const AgenceSignUp = () => {
  const loading = useSelector((state) => state.agenceReducer.loading);
  const agence = useSelector((state) => state.agenceReducer.agence);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const addAgence = (e) => {
    e.preventDefault();
    dispatch(
      registerAgency({
        name,
        email,
        phoneNumber,
        password,
      })
    );
  };
  return (
    <div>
      <SideBar />
      {loading ? (
        // <h1> Loading ...</h1>
        <Spinner />
      ) : agence ? (
        <Redirect to="/loginagence" />
      ) : (
        <div className="signup">
          <div className="login-box">
          <h2 style={{marginTop:'5px'}}> Register</h2>
         <form>
            <div className="user-box">
              <input style={{height:'50px'}}
                type="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                placeholder="name..."
                className="formcontrol"
              />
            <label> Name</label>
            </div>
            <div className="user-box">
              <input style={{height:'50px'}}
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email..."
                className="formcontrol"
              />
            <label> Email</label>
            </div>
            <div className="user-box">
              <input style={{height:'50px'}}
                type="phoneNumber"
                name="phoneNumber"
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="phoneNumber..."
                className="formcontrol"
              />
            <label> phoneNumber </label>
            </div>
            <div className="user-box">
              <input style={{height:'50px'}}
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password..."
                className="formcontrol"
              />
            <label> Password </label>
            </div>
            <div>
            <button onClick={addAgence} style={{marginBottom:'10px'}}>
            <span></span>
          <span></span>
          <span></span>
          <span></span>
              register </button>
          </div>
          </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgenceSignUp;
