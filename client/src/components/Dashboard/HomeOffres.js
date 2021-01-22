import React from 'react';
import { FaDollarSign } from 'react-icons/fa';
import "./HomeOffres.css";
const HomeOffres = ({offre}) => {
  console.log("offre", offre);
  return (
    <div className="offre-all">
      <img style={{width:'300px'}} src = {`http://localhost:3000/uploads/${offre.dirImage}`} alt="" />
      <div style={{padding:'15px'}}>
      <span> Direction: <h5 style={{textAlign:'center'}}> {offre.direction} </h5> </span>
      <span> Departure: <h5 style={{textAlign:'center'}}> {offre.départ} </h5> </span>
      <span> Arrival: <h5 style={{textAlign:'center'}}> {offre.arrivée} </h5> </span>
      <span> Date: <h5 style={{textAlign:'center'}}> {offre.date} </h5> </span>
      <h5 style={{textAlign:'center'}}> {offre.price} <FaDollarSign style={{color:'gold'}} /> </h5>
    </div>
    </div>
  );
}

export default HomeOffres;
