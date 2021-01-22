import React, { useEffect } from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { getProfil } from '../../js/actions';
import { viewOffres } from '../../js/actions/userPosts';
import './OneAgenceOffre.css'
const OneAgenceOffre = ({offre}) => {
  const dispatch = useDispatch();
 
  return (
    <div className="one-offre">
      <img style={{width:'300px'}} src = {`http://localhost:3000/uploads/${offre.dirImage}`} alt="" />
      <div className="one-text">
      <span style={{color:'orange'}}>Direction: <h5 className="infos"> {offre.direction} </h5></span>
      <span style={{color:'orange'}}>Departure: <h5 className="infos"> {offre.départ} </h5></span>
      <span style={{color:'orange'}}>Arrival: <h5 className="infos"> {offre.date} </h5></span>
      <span><h5 className="infos"> {offre.price}  <FaDollarSign style={{color:'gold'}} /></h5></span>
      </div>
    </div>
  );
}

export default OneAgenceOffre;
