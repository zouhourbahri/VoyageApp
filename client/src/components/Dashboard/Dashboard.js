import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { homeAgences, homeOffres } from "../../js/actions/Home";
import Footer from "../Footer/Footer";
import HomeImage from "../Navbar/HomeImage/HomeImage";
import NavbarAuth from "../Navbar/NavbarAuth";
import SideBar from "../SideBar/SideBar";
import "./Dashboard.css";
import HomeAgences from "./HomeAgences";
import HomeOffres from "./HomeOffres";
const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(homeAgences());
    dispatch(homeOffres());
  }, []);
  const allAgences = useSelector(state=> state.homeReducer.allAgences);
  const allOffres = useSelector(state=> state.homeReducer.allOffres);
  const [search , setSearch] = useState("");
  const [choice , setChoice] = useState("");
  return (
    <div className="holepagehome">
      <div>
        <SideBar />
      </div>
      <div>
        <div className="carrossel">
          <HomeImage />
        </div>
        <div>
        <div className="searchzone">
        <select className="select-zone" value={choice} onChange={(e)=>setChoice(e.target.value)}>
          <option> </option>
          <option> Agences </option>
          <option> Offres </option>
        </select>
        <input className="input-zone" type="text" placeholder="search here ...." value ={search} onChange={(e)=> setSearch(e.target.value)}/>
        <button className="btn-zone">  <FaSearch /> </button>
        </div>
        </div>
         { (choice === "Agences") ?
               <div className="homeagences"> 
               {allAgences.filter((agence) => agence.name.toLowerCase().includes(search.toLowerCase())).map((agence,i)=> <HomeAgences key={i} agence={agence} />)} 
               </div> :
               (choice === "Offres") ?  
                          <div className="homeagences"> 
              {allOffres.filter((offre)=> offre.direction.toLowerCase().includes(search.toLowerCase())).map((offre,i)=> <HomeOffres key={i} offre={offre} />) } 
              </div>:  
        <div>
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', marginLeft:'60px'}}>
         {allAgences.map((agence,i)=> 
            <HomeAgences key={i} agence={agence} />)}
        </div>
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', marginLeft:'60px'}}> 
        {allOffres.map((offre,i)=> 
            <HomeOffres key={i} offre={offre} />)}
        </div>
        </div> }
    <Footer />
    </div>
    </div>
  );
};

export default Dashboard;
