import React from 'react';
import './AllAgences.css';
import './Agence.css';
import { useDispatch } from 'react-redux';
import { getAllAgences } from '../../js/actions/Admin';


const Agence = ({ agence, agenceBan, agenceRemove }) => {
  const dispatch = useDispatch();

  //BAN AGENCE
  const handleBan = async (e) =>{
    e.preventDefault();
    await agenceBan(agence._id);
    dispatch(getAllAgences());
  };

// REMOVE AGENCE 
const handleDelete =async (e) => {
  e.preventDefault();
  await agenceRemove(agence._id);
  dispatch(getAllAgences());
};

  return (
    <div>
      <p className="listname"> {agence.name} </p>
      <button onClick={handleDelete} className="profil2 listbutton"> Delete </button>
      {agence.isBanned?
      <button onClick={handleBan} className="profil1 listbutton"> UnBan </button>
        :
      <button onClick={handleBan} className="profil listbutton"> Ban The Agence </button>
      }
    </div>
  );
}

export default Agence;
