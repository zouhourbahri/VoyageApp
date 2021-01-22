// import React from "react";
// import { Link } from "react-router-dom";

// const SideBar = () => {
//   return (
//     <div className="sidebar">
//       <div >
//       <Link to="/registeruser"> Signup as a user </Link>
//       </div>
//       <div>
//       <Link to="/loginuser"> Signin as a user </Link>
//       </div>
//       <div>
//       <Link to="/registeragence"> Signup as an agence </Link>
//       </div>
//       <div>
//       <Link to="/loginagence"> Signin as an agence</Link>
//       </div>
//     </div>
//   );
// };

// export default SideBar;
import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
import { FaHome, FaKey,FaPlane,FaPlaneDeparture,FaUser } from 'react-icons/fa';

const SideBar = () => {
  return (
    <div  className="bodySideBar">
  
       
        <nav className="main-menu">
          <div className="scrollbar" id="style-1">
            <ul className="listdeco">
              <li>
              <Link to="/">
                <FaHome style={{color:'red' ,fontSize:'25px',marginLeft:'10px'}}/>
                <span className="nav-text">Home Page</span>
                </Link>
              </li>
              <li>
              <Link to="/registeruser">
                <FaKey style={{fontSize:'25px',marginLeft:'10px'}}/>                  
                  <span className="nav-text">User Register</span>
                  
                  </Link>
              </li>
              <li>
                <Link to="/loginuser" >
                 <FaUser style={{fontSize:'25px',marginLeft:'8px'}}/>
                  <span className="nav-text">User Login</span>
                  </Link>
              </li>
              <li>
              <Link to="/registeragence">
                <FaKey style={{fontSize:'25px',marginLeft:'10px'}}/>                  
                  <span className="nav-text">Agence Register</span>
                </Link>
              </li>
              <li>
              <Link to="/loginagence">
                 <FaUser style={{fontSize:'25px',marginLeft:'8px'}}/>
                  <span className="nav-text">Agence Login</span>
                </Link>
              </li>
            </ul>
            
          </div>
        </nav>
      </div>
   

  );
};

export default SideBar;

