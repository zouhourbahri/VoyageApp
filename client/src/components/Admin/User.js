import React from 'react';
import './User.css';
import './AllUsers.css';


const User = ({ user,addAnAdmin,userDelete,userBan }) => {
  //ADD ADMIN
  const handleAdmin = (e) => {
    e.preventDefault();
    addAnAdmin(user._id);
  };

  //DELETE USER 
  const handleDelete = (e) => {
    e.preventDefault();
    userDelete(user._id);
  };

  //BAN USER 
  const handleBan = (e) => {
    e.preventDefault();
    userBan(user._id);
  };

  return (
    <div>
      <p className="listname"> {user.name} </p>
      <button onClick={handleDelete} className="profil2 listbutton"> Delete </button>
      {user.isBanned? 
      <button onClick={handleBan} className="profil1 listbutton"> UnBan </button>
      :  
      <button onClick={handleBan} className="profil listbutton"> Ban The User </button>
    }
    {user.isAdmin? 
      <button onClick={handleAdmin} className="profil1 listbutton"> Remove Admin </button>
    :
    <button onClick={handleAdmin} className="profil listbutton"> Add Admin </button>
  }
    </div>
  );
}

export default User;
