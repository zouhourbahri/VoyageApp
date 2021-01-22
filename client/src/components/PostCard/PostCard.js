import React, { useState } from 'react';
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addAll, likePost } from '../../js/actions/userPosts';
import "./PostCard.css";
const PostCard = ({post}) => {
  const dispatch = useDispatch();
  const likepost = async (e) => {
    e.preventDefault();
    await dispatch(likePost(post._id));
      dispatch(addAll());
  }

  return (
    <div> 
      <div className="postedby"> Posted By:<span className="name"> {post.user && post.user.name} </span></div>
    <div className="postcard">
      <div className="otherimg">
          <img src = {`http://localhost:3000/uploads/${post.dirImage}`} alt="" />
      </div>
      <div className="textpostcard">
      <div className="title-direction">
      <div className="directioncard">
        {post.direction}
      </div>
      <div>
        {post.year}
      </div>
      </div>
      <div className="card-description">
        {post.description}
      </div>
      <div className="like-box">
      {post.__v}
      <button onClick={likepost} className="like-btn"> 
      <FaThumbsUp />
      </button>
      </div>
    </div>
    </div>
    </div>
  );
}

export default PostCard;
