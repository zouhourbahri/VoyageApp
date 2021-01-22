import React from 'react';
import { FaAt, FaPhone } from 'react-icons/fa';
import ReactStars from "react-rating-stars-component";
import './HomeAgences.css';


const HomeAgences = ({agence}) => {
  var rating = 0;
  const x=5;
  if(agence.Rating.length>0) {
    var rate = agence.Rating.map(el=> el.rate).reduce((accumulator, currentValue) => accumulator + currentValue);
    var rating = Math.floor((rate /(agence.Rating.length))/2)+0.5;
  }
  const ratestars = {
    size: 30,
    value: rating,
    edit: false
  };
  console.log("ratestars.value", ratestars.value);
  return (
    <div className="agence-chid">
       <h5 style={{color:'silver', fontWeight:'sans-serif'}}>{agence.name} </h5> 
       <h6 style={{color:'silver', fontWeight:'sans-serif'}}> <FaAt /> {agence.email} </h6>  
       <h6 style={{color:'silver', fontWeight:'sans-serif'}}> <FaPhone /> {agence.phoneNumber}</h6>  
       <h6 style={{marginLeft:'80px'}}> <ReactStars {...ratestars}  /> </h6>
    </div>
  );
}

export default HomeAgences;
