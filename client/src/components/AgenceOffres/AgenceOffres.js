import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { agenceProfil } from "../../js/actions/Agence";
import { addOffres, deleteOffre, getOffres } from "../../js/actions/Offres";
import AgenceOffre from "../AgenceOffre";
import NavbarAuth from "../Navbar/NavbarAuth";
import Spinner from "../Spinner/Spinner";
import "./AgenceOffres.css";

const AgenceOffres = () => {
  const dispatch = useDispatch();

  // **** Get Agence Name *****/
  useEffect(() => {
    dispatch(agenceProfil());
    dispatch(getOffres(agence && agence.data._id));
  }, []);

  //**** Get Data From DB ****/
  const agence = useSelector((state) => state.agenceReducer.agence);
  const loading = useSelector((state) => state.agenceReducer.loading);
  const allOffres = useSelector((state) => state.offreReducer.allOffres);

  //**** Remove An Offre ****/
  const handleRemove = async (id) => {
    await dispatch(deleteOffre(id));
    dispatch(getOffres(agence && agence.data._id));

  };

  //***** Adding Data about New Offre ****/
  const [direction, setDirection] = useState("");
  const [départ, setDépart] = useState("");
  const [arrivée, setArrivée] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState(null);
  const [dirImage, setDirImage] = useState("");
  const offer = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("direction", direction);
    formData.append("départ", départ);
    formData.append("arrivée", arrivée);
    formData.append("date", date);
    formData.append("price", price);
    formData.append("dirImage", dirImage);
    await dispatch(addOffres(formData));
    dispatch(getOffres(agence && agence.data._id));
    setDirection("");
    setDépart("");
    setArrivée("");
    setDate("");
    setPrice(null);
    setDirImage("");
  };

  //**** Get All Offres ****/
  useEffect(() => {
    if (agence!==null){dispatch(getOffres(agence && agence.data._id))};
  }, [loading]);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="AgenceOffres">
          <div className="nav-agenceoffres">
            <NavbarAuth />
          </div>
          <div className="agencedata">
          <div className="list-offres">
          {allOffres.map((offre, i) => (
            <AgenceOffre key={i} offre={offre} handleRemove={handleRemove} />
          ))}
          </div>
          <div className="newoffre">
          <div className="linkprofilagence">
          <Link to="/profilagence"> Profil </Link>
          </div>
          <div className="newOffreform">
            <h1 style={{color:'silver', marginLeft:'45px'}}> Add a new offre</h1>
          <div>
            <input className="inputformoffre"
              type="direction"
              name="direction"
              onChange={(e) => setDirection(e.target.value)}
              placeholder="direction..."
            />
          </div>
          <div>
            <input className="inputformoffre"
              type="départ"
              name="départ"
              onChange={(e) => setDépart(e.target.value)}
              placeholder="départ..."
            />
          </div>
          <div>
            <input className="inputformoffre"
              type="arrivée"
              name="arrivée"
              onChange={(e) => setArrivée(e.target.value)}
              placeholder="arrivée..."
            />
          </div>
          <div>
            <input className="inputformoffre" style={{width:'200px', marginLeft:'30px'}}
              type="date"
              name="date"
              onChange={(e) => setDate(e.target.value)}
              placeholder="date..."
            />
          </div>
          <div>
            <input className="inputformoffre"
              type="price"
              name="price"
              onChange={(e) => setPrice(e.target.value)}
              placeholder="price..."
            />
          </div>
          <div>
            <input className="inputformoffre" style={{backgroundColor:'transparent'}}
              type="file"
              name="photo"
              onChange={(e) => {
                setDirImage(e.target.files[0]);
                console.log("files", e.target.files[0]);
              }}
              placeholder="upload image..."
            />
          </div>
          <button onClick={offer} className="btn-agenceoffre"> ADD </button>
        </div>
        </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default AgenceOffres;
