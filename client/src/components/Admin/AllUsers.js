import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { getProfil } from "../../js/actions";
import { addAdmin, banUser, deleteUser, getAllUsers } from "../../js/actions/Admin";
import NavbarAuth from "../Navbar/NavbarAuth";
import User from "./User";
import "./AllUsers.css"
import Spinner from "../Spinner/Spinner";

const AllUsers = () => {
  const dispatch = useDispatch();

  // *** Get user name *****/
  // useEffect(() => {
  //   dispatch(getProfil());
  // }, [dispatch]);

  //Delete A User
  const userDelete = async (id) => {
    await dispatch(deleteUser(id));
  dispatch(getAllUsers());

  };

  // ADD ADMIN
  const addAnAdmin = (id) => {
    dispatch(addAdmin(id));
  };

  //BAN A USER
  const userBan = (id) => {
    dispatch(banUser(id));
  };
useEffect(() => {
  dispatch(getProfil());
  dispatch(getAllUsers());
}, []);
  // GET DATA FROM DB
  const ListOfUsers = useSelector((state) => state.adminReducer.allUsers);
  const loading = useSelector((state) => state.adminReducer.loading);

  return loading ? (
    <Spinner />
  ) : (localStorage.getItem("token")? (
    <div className="toutepage">
    <div className="navbar">
      <NavbarAuth />
      </div>
      <div>
      <button className="profil">
        <Link to="/profil"> Profil </Link>
      </button>
      <div className="listeuser">
      {ListOfUsers && ListOfUsers.map((user, i) => (
        <ul className="tilesWrap">
          <li>
          <h2>{i+1}</h2>
        <User
          key={i}
          user={user}
          addAnAdmin={addAnAdmin}
          userDelete={userDelete}
          userBan={userBan}
        />
        </li>
        </ul>
      ))}
      </div>
    </div>
    </div>
  ) : ( <Redirect to="/loginuser" />))
      }

export default AllUsers;
