import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { notate, viewOffres } from "../../js/actions/userPosts";
import ReactStars from "react-rating-stars-component";
import "./UserAgence.css";
import { FaAt, FaPhone } from "react-icons/fa";

const UserAgence = ({ agence }) => {
  const dispatch = useDispatch();
  const viewOff = (e) => {
    e.preventDefault();
    dispatch(viewOffres(agence._id));
  };

const [etoile, setEtoile]=useState(0);
  const Stars = {
    size: 25,
    count: 10,
    isHalf: false,
    value: +etoile,
    color: "gray",
    activeColor: "yellow",
    onChange: newValue => {
      console.log(`stars: new value is ${newValue}`);
      dispatch(notate(agence._id , newValue));
      setEtoile(newValue);
    }
  };
  return (
    <div className="useragence">
      <div>
      <div>
        <h1 className="textagence"> {agence.name} </h1>
        <h5> <FaAt /> {agence.email} </h5>
        <h5> <FaPhone /> {agence.phoneNumber} </h5>
      </div>
      <div className="ratingstars">
      <ReactStars {...Stars} />
      </div>
      </div>
      <div>
      <button onClick={viewOff} className="viewoffres">
        <Link to={`/profiluser/agences/offres/${agence._id}`} className="viewoffres"> View Offres </Link>
      </button>
      </div>
    </div>
  );
};

export default UserAgence;
