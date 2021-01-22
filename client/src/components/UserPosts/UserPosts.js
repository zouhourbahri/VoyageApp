import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserPost from "../UserPost/UserPost";
import { addAll, addOffres } from "../../js/actions/userPosts";
import { Link, Redirect } from "react-router-dom";
import { getPosts, addPosts, deletePost } from "../../js/actions/userPosts";
import { getProfil } from "../../js/actions";
import NavbarAuth from "../Navbar/NavbarAuth";
import "./UserPosts.css";
import Spinner from "../Spinner/Spinner";

const UserPosts = () => {
  const dispatch = useDispatch();

  // *** Get user name *****/
  useEffect(() => {
    dispatch(getProfil());
  },[]);

  //Get Data from DB
  const user = useSelector((state) => state.userReducer.user);
  const load = useSelector((state) => state.postsReducer.loading);
  const listOfPosts = useSelector((state) => state.postsReducer.allPosts);

//Remove a Post
const handleRemove = async (id) => {
  await dispatch(deletePost(id));
  dispatch(getPosts(user._id));
}

  //***** ADD data about new destination ******/
  const [direction, setDirection] = useState("");
  const [year, setYear] = useState(null);
  const [description, setDescription] = useState("");
  const [dirImage, setDirImage] = useState("");
  const posting = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("direction", direction)
    formData.append("year", year)
    formData.append("description", description)
    formData.append("dirImage", dirImage)
    await dispatch(
      addPosts(formData)
    );
    dispatch(getPosts(user._id));
  };
  

 //Get All Exist
const handleAll = (e) => {
  e.preventDefault();
  dispatch(addAll());
};

useEffect(() => {
  if (user !== null) {dispatch(getPosts(user._id))};
},[user]);

  return (localStorage.getItem('token')? 
    <div >
      {load ? (
        // <h1> Loading .....</h1>
        <Spinner />
      ) : (
        <div className="userPosts">
          <div className="navuserposts"> 
          <NavbarAuth />
          </div>
          <div className="postslist">
          {listOfPosts.map((post, i) => (
            <UserPost key={i} post={post} handleRemove={handleRemove} />
          ))}
          </div>
          <div>
            <div>
            <div className="linkedlist">
            <Link to="/profil"> Profil</Link>
            <button onClick={handleAll} className="btnuserposts">
            <Link to="/profiluser/posts/all">
            Other Posts 
            </Link>
            </button>
          </div>
            <div className="newpost">
              <div>
              <h1 className="addexptitle"> Add a new experience </h1>
            </div>
            <div>
              <input className="inputtext"
                type="direction"
                name="direction"
                onChange={(e) => setDirection(e.target.value)}
                placeholder="direction..."
              />
            </div>
            <div>
              <input className="inputtext"
                type="year"
                name="year"
                onChange={(e) => setYear(e.target.value)}
                placeholder="year..."
              />
            </div>
            <div>
              <input className="inputtext"
                type="description"
                name="description"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="description..."
              />
            </div>
            <div>
              <input className="inputfile"
                type="file"
                name="dirImage"
                onChange={(e) => {setDirImage(e.target.files[0])
                console.log("files",e.target.files);}}
                placeholder="upload image..."
              />
            </div>
            <button onClick={posting} className="newpost-btn"> ADD </button>
          </div>
          </div>
          </div>
          </div>
      )}
      </div> : <Redirect to="/loginuser" />
  );
};

export default UserPosts;
