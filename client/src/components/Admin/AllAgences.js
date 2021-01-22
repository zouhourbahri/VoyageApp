import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { getProfil } from "../../js/actions";
import { banAgence, deleteAgence, getAllAgences } from "../../js/actions/Admin";
import NavbarAuth from "../Navbar/NavbarAuth";
import Spinner from "../Spinner/Spinner";
import Agence from "./Agence";
import './AllAgences.css';

const AllAgences = () => {
  const dispatch = useDispatch();

// *** Get user name *****/
useEffect(() => {
  dispatch(getProfil());
  dispatch(getAllAgences());
}, []);

  //GET DATA FROM DB
  const loading = useSelector((state) => state.adminReducer.loading);
  const listOfAgences = useSelector((state) => state.adminReducer.allAgences);

// BAN AGENCE
const agenceBan = async (id) => {
  await dispatch(banAgence(id));
  dispatch(getAllAgences());
};

//DELETE AN AGENCE
const agenceRemove = async (id) => {
  await dispatch(deleteAgence(id));
  dispatch(getAllAgences());
};
  



  return loading ? (
    // <h1> Loading ...</h1>
    <Spinner />
  ) : (localStorage.getItem("token") ? (
    <div className="toutepage">
      <div className="navbar"> 
      <NavbarAuth />
      </div>
      <div>
      <button className="profil">
        <Link to="/profil" className="myprofil"> Profil </Link>
      </button>
      <div className="listeuser">
      {listOfAgences &&
        listOfAgences.map((agence, i) => (
          <ul className="tilesWrap">
          <li>
          <h2>{i+1}</h2>
          <Agence key={i} agence={agence} agenceBan={agenceBan} agenceRemove={agenceRemove}/>
          </li>
        </ul>
        ))}
        </div>
    </div>
    </div>
  ) : (<Redirect to="/loginagence" />))
};

export default AllAgences;
