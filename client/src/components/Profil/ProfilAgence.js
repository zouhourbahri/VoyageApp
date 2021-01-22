import React, { useEffect } from 'react';
import { FaAt, FaPhone } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { agenceProfil } from '../../js/actions/Agence';
import NavbarAuth from '../Navbar/NavbarAuth';
import Spinner from '../Spinner/Spinner'
import "./ProfilAgence.css";
const ProfilAgence = () => {
const dispatch = useDispatch();


//***** Get Agence Name ******/
useEffect(() => {
    dispatch(agenceProfil());
},[dispatch]);


//**** Get Data From DB *****/
const loading = useSelector(state => state.agenceReducer.loading);
const agence = useSelector(state => state.agenceReducer.agence);
// const isAuth = useSelector(state => state.agenceReducer.agence);

return loading ? (
    <Spinner/>
    ) :
    ( <div className="profilagence">
        <div className="nav-profilagence">
        <NavbarAuth />
        </div>
        <div className="content">
            <div className="text-agence">
            <p className="text-content" style={{fontSize:'30px', color:'orange'}}> {agence && agence.data && agence.data.name} </p>
            <p className="text-content"> <FaAt /> {agence && agence.data && agence.data.email} </p>
            <p className="text-content"> <FaPhone /> {agence && agence.data && agence.data.phoneNumber} </p>
        </div>
            <div className="btnss position">
                <button className="btnss"> <Link to="/profilagence" style={{textDecoration:'none'}}> Profil </Link> </button>
                <button className="btnss"> <Link to="/profilagence/offres" style={{textDecoration:'none'}}> Offres </Link> </button>
            </div>
        </div>
        </div>
);
}

export default ProfilAgence;
