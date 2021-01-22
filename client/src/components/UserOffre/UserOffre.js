import React from 'react';
import { FaDollarSign, FaThumbsUp } from 'react-icons/fa';
import {useSelector , useDispatch} from 'react-redux';
import { addOffres, likeOffre } from '../../js/actions/userPosts';
import "./UserOffre.css";

const UserOffre = ({offre}) => {
  const Likes = useSelector(state => state.postsReducer.Likes);
  const dispatch = useDispatch();
  const like = async (e) => {
    e.preventDefault();
    await dispatch(likeOffre(offre._id));
    dispatch(addOffres());
  }
  return (
    <div className="useroffre">
      <div className="published">
      Published By {offre.agence && offre.agence.name}
      </div>
      <div>
          <img className="photooffre" src = {`http://localhost:3000/uploads/${offre.dirImage}`} alt="" />
      </div>
    <div>
      <span className="text-offre">Destination: <p style={{fontSize:'26px', marginLeft:'10px'}}>{offre.direction} </p></span>
      <span className="text-offre" > Departure: <p style={{fontSize:'26px', marginLeft:'10px'}}>{offre.départ} </p></span>
      <span className="text-offre"> Arrival:<p style={{fontSize:'26px', marginLeft:'10px'}}>{offre.arrivée} </p></span>
      <span className="text-offre"> Date: <p style={{fontSize:'26px', marginLeft:'10px'}}>{offre.date} </p></span>
    <p style={{fontSize:'26px', marginLeft:'10px'}}>  {offre.price} <span style ={{color: 'gold'}}> <FaDollarSign /> </span></p>
    </div>
    <div className="like-offre">
    <p style={{marginTop:"20px"}}> {offre.likes && offre.likes.length } </p>
    <button onClick={like} className="btn-useroffre"> <FaThumbsUp style={{fontSize:'40px'}}/> </button>
    </div>
    </div>
  );
}

export default UserOffre;
