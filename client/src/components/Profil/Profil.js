import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { addAgences, addOffres, getPosts } from "../../js/actions/userPosts";
import { addAll } from "../../js/actions/userPosts";
import { getProfil } from "../../js/actions";
import NavbarAuth from "../Navbar/NavbarAuth";
import { getAllAgences, getAllUsers } from "../../js/actions/Admin";
import Spinner from '../Spinner/Spinner';
import "./Profil.css"

const Profil = () => {
  const dispatch = useDispatch();

  // *** Get user name *****/
  useEffect(() => {
    dispatch(getProfil());
    
  }, []);

  //***** Get data from DB *****/
  const loading = useSelector((state) => state.userReducer.loading);
  const user = useSelector((state) => state.userReducer.user);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  // const allUsers = useSelector(state =>state.adminReducer.allUsers);

  // Get All Posts
  const myposts = (e) => {
    e.preventDefault();
    dispatch(getPosts(user._id));
  };

  //Get All Exist
  const handleAll = (e) => {
    e.preventDefault();
    dispatch(addAll());
  };
  
//GET ALL AGENCES FOR USER
const userAgences = (e) => {
  e.preventDefault();
  dispatch(addAgences());
};

//GET ALL OFFRES FOR USER 
const userOffres = (e) => {
  e.preventDefault();
  dispatch(addOffres());
}
//GET ALL USERS 
const users = (e) => {
  e.preventDefault();
  dispatch(getAllUsers());
};

//GET ALL AGENCES FOR ADMIN 
const agences = (e) => {
  e.preventDefault();
  dispatch(getAllAgences());
}


  return loading ? (
    <Spinner/>
  ) : !isAuth ? (
    <Redirect to="/loginuser" />
  ) : (
    <div>
      <div className ='userprofil'>
        <div className="navbar"> 
          <NavbarAuth />
        </div>
        <div className="totalcards">
        <div className="correct">
          <div className="one">
          <div className="one__face one__face--front">
          <span > WORLD DISCOVERER </span>
          <span > HELLO WORLD </span>
          </div>
          <div class="one__face one__face--back">
          <p> {user.name} </p>
          <p> {user.email} </p>
          <p> {user.hobbies.split(",").map((el,i) => (
            <ul key={i}> <li className="para"> {el} </li> </ul>
          )) }</p>
          </div>
          </div> 
        </div>
        <div>
        {user && user.isAdmin ?
          <div className='multi-button'>
            <div>
          <button className="changebtn">
            <Link to="/profil" className="linkedbtn">Profil</Link>
          </button>
          <button onClick={users} className="changebtn">
            <Link to="/admin/allUsers" className="linkedbtn">All Users </Link>
          </button>
          <button onClick={agences} className="changebtn">
            <Link to="/admin/allAgences" className="linkedbtn">All Agences</Link>
          </button>
          </div>
          <div className='multi-button'>
          <button className="changebtn">
            <Link to="/profil" className="linkedbtn">Profil</Link>
          </button>
          <button onClick={myposts} className="changebtn">
            <Link to="/profiluser/posts" className="linkedbtn">My Posts </Link>
          </button >
          <button onClick={handleAll} className="changebtn">
            <Link to="/profiluser/posts/all" className="linkedbtn">Other Posts</Link>
          </button>
        </div>
        <div className='multi-button'>
          <button onClick={userAgences} className="changebtn">
            <Link to="/profiluser/agences" className="linkedbtn">All Agences </Link>
          </button>
          <button onClick={userOffres} className="changebtn">
            <Link to="/profiluser/offres" className="linkedbtn">All Offres</Link>
          </button>
        </div> 
        </div>
        :
        <div>
        <div className='multi-button'>
          <button className="changebtn">
            <Link to="/profil" className="linkedbtn">Profil</Link>
          </button>
          <button onClick={myposts} className="changebtn">
            <Link to="/profiluser/posts" className="linkedbtn">My Posts </Link>
          </button>
          <button onClick={handleAll} className="changebtn">
            <Link to="/profiluser/posts/all" className="linkedbtn">Other Posts</Link>
          </button>
        </div> 
        <div className='multi-button'>
          <button onClick={userAgences} className="changebtn">
            <Link to="/profiluser/agences" className="linkedbtn">All Agences </Link>
          </button>
          <button onClick={userOffres} className="changebtn">
            <Link to="/profiluser/offres" className="linkedbtn">All Offres</Link>
          </button>
        </div> 
        </div>
        }
      </div>
      </div>
      </div>
    </div>
  );
};
export default Profil;
