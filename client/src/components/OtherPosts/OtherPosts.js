import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { getProfil } from "../../js/actions";
import { addAll } from "../../js/actions/userPosts";
import NavbarAuth from "../Navbar/NavbarAuth";
import PostCard from "../PostCard/PostCard";
import Spinner from "../Spinner/Spinner";
import "./OtherPosts.css";

const OtherPosts = () => {
  const dispatch = useDispatch();

  // *** Get user name *****/
  useEffect(() => {
    dispatch(getProfil());
    dispatch(addAll());
  }, []);


  // Get Data from DB
  const load = useSelector((state) => state.postsReducer.loading);
  const tous = useSelector((state) => state.postsReducer.allExist);
  return ( localStorage.getItem('token') ?
  <div>
    {load ? (
     <Spinner/>
    ) : (
      <div className="otherposts">
      <div className="nav-otherposts">
        <NavbarAuth />
        <div className="linked-list">
            <Link to="/profil"> Profil</Link>
            <Link to="/profiluser/posts"> My Posts</Link>
          </div>
          </div>
        <div className="list-otherposts">{tous.map((post, i)=> <PostCard key ={i} post={post} />)}</div>
      </div>
    )}
  </div>: <Redirect to="/loginuser" />)
};

export default OtherPosts;
