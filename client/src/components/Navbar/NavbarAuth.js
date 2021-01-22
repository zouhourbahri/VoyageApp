import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { logoutAgency } from "../../js/actions/Agence";
import { logout } from "../../js/actions/index";
import SideBar from "../SideBar/SideBar";
import { FaSearch, FaSignOutAlt, FaUser } from 'react-icons/fa';
import "./Navbar.css";


const NavbarAuth = () => {
  const dispatch = useDispatch();

  // Get data from db
  const user = useSelector((state) => state.userReducer.user);
  const agence = useSelector((state) => state.agenceReducer.agence);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const Authorized = useSelector((state) => state.agenceReducer.Authorized);
  // LogOut
  const logOutUser = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  const logOutAgence = (e) => {
    e.preventDefault();
    dispatch(logoutAgency());
  };
  if (isAuth) {
    return localStorage.getItem("token") ? (
      <div className="logoutbar">
        <div className="containerHead">
        <div className = 'container projects'>
          <h1 className="welcome">Welcome to your Profil</h1>
          </div>
          </div>
          <div className="contain">
          <FaUser style={{fontSize:'100px' }}/>
          <p className="myname"> {user.name} </p>
            <button onClick={logOutUser} className="logout-btn"> logout 
            <span className="logo">
            <FaSignOutAlt />
            </span>
          </button>
          </div>
    </div>
    ) : (
      <Redirect to="/registeruser" /> 
    );
  }
  if (Authorized) {
    return localStorage.getItem("token") ? (
      <div className="logoutbar">
      <div className="containerHead"> 
       <div className='container projects'>
       <h1 className="welcome">Welcome to your Profil</h1>
          </div>
          </div>
        <div className="contain">
        <FaUser style={{fontSize:'150px'}}/> 
          <p className="myname"> {agence.data.name} </p>
            <button onClick={logOutAgence}className="logout-btn"> 
            logout
            <span className="logo">
            <FaSignOutAlt />
            </span>
        </button>
        </div>
      </div>
    ) : (
      <div>
        <Redirect to="/" />
      </div>
    );
  }
 return (
    <div>
      {/* <div className="contain">
        <SideBar />
        <div>
          <ul className="liste">
            <li> <Link to="/" > Home </Link> </li>
            <li>Top Destinations</li>
            <li>Top Agences</li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default NavbarAuth;
