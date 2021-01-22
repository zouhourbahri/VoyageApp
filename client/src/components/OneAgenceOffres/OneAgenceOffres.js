import React, { useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { getProfil } from '../../js/actions';
import { viewOffres } from '../../js/actions/userPosts';
import NavbarAuth from '../Navbar/NavbarAuth';
import Spinner from '../Spinner/Spinner';
import OneAgenceOffre from './OneAgenceOffre';
import './OneAgenceOffres.css';
const OneAgenceOffres = ({ match }) => {
    const loading = useSelector(state=> state.postsReducer.loading);
    const agenceOffres = useSelector(state => state.postsReducer.agenceOffres);
    const dispatch = useDispatch();

     // *** Get user Profil *****/
     useEffect(() => {
      dispatch(getProfil());
      dispatch(viewOffres(match.params.id));
  },[dispatch]);
  return (localStorage.getItem('token') ?
    <div>
      {loading ?
      // <h1> Loading ...</h1> 
      <Spinner />
      : 
      <div className="oneagenceoffres">
        <div className="one-nav"> <NavbarAuth /> </div>
      <div className="links-one">
        <div style={{marginLeft:'750px'}}> <Link to = "/profil" style={{marginLeft:'300px'}}><button style={{backgroundColor:'inherit', color:'lightpink'}}> Profil </button></Link> 
        {/* <form style={{display:'flex', alignItems:'center'}}> */}
          {/* <input type="search" placeholder="Search here ...." /> */}
          {/* <button style={{backgroundColor:'inherit', backgroundColor:'silver', height:'50px',width:'60px', borderRadius:'5px'}}> <FaSearch style={{fontSize:'30px'}} /> </button> */}
        {/* </form> */}
        </div>
        {agenceOffres.map((offre,i) => <OneAgenceOffre key={i} offre={offre} />)}
      </div>
      </div>}
    </div> : <Redirect to='/' />
  );
}

export default OneAgenceOffres;
