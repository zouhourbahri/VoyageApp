import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { getProfil } from "../../js/actions";
import { addAgences, addOffres } from "../../js/actions/userPosts";
import NavbarAuth from "../Navbar/NavbarAuth";
import Spinner from "../Spinner/Spinner";
import UserAgence from "../UserAgence/UserAgence";
import "./UserAgences.css";

const UserAgences = () => {
  const allAgences = useSelector((state) => state.postsReducer.allAgences);
  const loading = useSelector((state) => state.postsReducer.loading);
  const dispatch = useDispatch();

  // *** Get user Profil *****/
  useEffect(() => {
    dispatch(getProfil());
    dispatch(addAgences());
  }, []);

  //GET ALL OFFRES FOR USER
  const userOffres = (e) => {
    e.preventDefault();
    dispatch(addOffres());
  };

  return (localStorage.getItem('token') ?
    <div>
      {loading ? (
        // <h1> Loading ... </h1>
        <Spinner />
      ) : (
        <div>
          <div className="useragences">
            <div className="userA-nav">
              <NavbarAuth />
            </div>
            <div className="list-agences">
            <div className="userAlinks">
              <Link to="/profil">
                <button className="btn-useragences"> Profil </button>
              </Link>
              <button onClick={userOffres} className="btn-useragences">
                <Link to="/profiluser/offres" className="btn-useragences"> ALL OFFRES </Link>
              </button>
            </div>
            <div className="agenceslist">
              {allAgences.map((agence, i) => (
                <UserAgence key={i} agence={agence} />
              ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div> : <Redirect to="/loginuser" />
  );
};

export default UserAgences;
