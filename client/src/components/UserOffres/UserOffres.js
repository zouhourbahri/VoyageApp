import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { getProfil } from "../../js/actions";
import { addOffres } from "../../js/actions/userPosts";
import NavbarAuth from "../Navbar/NavbarAuth";
import Spinner from "../Spinner/Spinner";
import UserOffre from "../UserOffre/UserOffre";
import "./UserOffres.css";
const UserOffres = () => {
  const allOffres = useSelector((state) => state.postsReducer.allOffres);
  const Loading = useSelector((state) => state.postsReducer.loading);
  const dispatch = useDispatch();

  // *** Get user Profil *****/
  useEffect(() => {
    dispatch(getProfil());
    dispatch(addOffres());
  }, []);
  return (localStorage.getItem('token')?
    <div>
      {Loading ? (
        // <h1> Loading ...</h1>
        <Spinner />
      ) : (
        <div className="useroffres">
          <div className="nav-useroffres">
            <NavbarAuth />
          </div>
          <div>
            <div className="linksoffres">
              <Link to="/profil">
                <button className="btn-useroffres"> Profil </button>
              </Link>
              <Link to="/profiluser/agences">
                <button className="btn-useroffres"> All Agences </button>
              </Link>
            </div>
            <div className="list-useroffres">
              {allOffres.map((offre, i) => (
                <UserOffre key={i} offre={offre} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div> : <Redirect to='/loginuser' />
  );
};

export default UserOffres;
