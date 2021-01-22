import React from 'react';
import "./UserPost.css";

const UserPost = ({post, handleRemove}) => {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(post._id);
    
  }
  return (
    <div className='userpost'>
      <div className="countryimg">
          <img src = {`http://localhost:3000/uploads/${post.dirImage}`} alt="" />
      </div>
      <div>
        <div className="posttitle">
      <div className="postdirection">
          {post.direction}
      </div>
      <div className="postyear">
          {post.year}
      </div>
      </div>
      <div className="userpostdescription">
          {post.description}
      </div>
      <div className="btnuserpost">
          <button className="btn-delete" onClick={remove}> Delete </button>
      </div>
      </div>
    </div>
  );
}

export default UserPost;
