import React from "react";
import { FaDollarSign, FaFunnelDollar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addOffres } from "../js/actions/userPosts";
import "./AgenceOffre.css";

const AgenceOffre = ({ offre, handleRemove }) => {
  const dispatch = useDispatch();
  const remove = async (e) => {
    e.preventDefault();
    await handleRemove(offre._id);
    dispatch(addOffres());
  };
  return (
    <div className="offrecard">
      <div className="publishedoffre">
      <span > Published By </span> {offre.agence && offre.agence.name}
      </div>
      <div style={{width:'450px'}}>
      <img style={{width:'350px'}} src={`http://localhost:3000/uploads/${offre.dirImage}`} alt="" />
      </div>
      <div>
        <h5 style={{fontSize:'22px' , fontWeight:'sans-serif', marginLeft:'30px'}}> Direction:  {offre.direction}</h5>
      </div>
      <div>
      <h5 style={{fontSize:'22px' , fontWeight:'sans-serif', marginLeft:'30px'}}> Départ:  {offre.départ}</h5>
      </div>
      <div>
      <h5 style={{fontSize:'22px' , fontWeight:'sans-serif', marginLeft:'30px'}}> Arrivée:  {offre.arrivée}</h5>
      </div>
      <div>
      <h5 style={{fontSize:'22px' , fontWeight:'sans-serif', marginLeft:'30px'}}> Date:  {offre.date}</h5>
      </div>
      <div style={{ marginLeft:'90px'}}>
        {offre.price} <FaDollarSign style={{color:'gold'}} />
      </div>
      <div>
        <button onClick={remove} style={{marginLeft:'260px', backgroundColor:'rgb(124, 87, 18)' , borderRadius:'5px'}} > Delete </button>
      </div>
    </div>
  );
};

export default AgenceOffre;
