//import packages
import React,{useState} from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { Redirect } from "react-router-dom";

// import files
import { register } from "../../js/actions";
import { setAlert } from "../../js/actions/Alert";
import NavbarAuth from "../Navbar/NavbarAuth";
import SideBar from "../SideBar/SideBar";
import Spinner from "../Spinner/Spinner";
import "./Signup.css";


const Signup = () => {
  const loading = useSelector((state) => state.userReducer.loading); // getting data from db
  const user = useSelector((state) => state.userReducer.user); // getting data from db
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hobbies, setHobbies] = useState("");
  const addUser = (e) => {
    e.preventDefault();
    dispatch(
      register({
        name,
        email,
        password,
        hobbies,
      })
    );
  };
  return (
    <div>
      <SideBar />
      {loading ? (
        // <h1> please wait ...</h1>
        <Spinner />
      ) : user ? (
        <Redirect to="/loginuser" />
      ) : (
        <div className="signup">
        <div className="login-box">
          <h2 style={{marginTop:'10px'}}> Register</h2>
         <form>
          <div className="user-box">
            <input style={{height:'40px'}}
              type="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="name ..."
            />
            <label> Name</label>
          </div>
          <div className="user-box">
            <input style={{height:'40px'}}
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email ..."
            />
            <label> Email</label>
          </div>
          <div className="user-box">
            <input style={{height:'40px'}}
              type="hobbies"
              name="hobbies"
              onChange={(e) => setHobbies(e.target.value)}
              placeholder="hobbies ..."
            />
            <label> Hobbies </label>
          </div>
          <div className="user-box">
            <input style={{height:'40px'}}
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password ..."
            />
            <label> Password </label>
          </div>
          <div>
            <button onClick={addUser}> 
            <span></span>
          <span></span>
          <span></span>
          <span></span>
            register </button>
          </div>
          </form>
        </div>
      </div>
      )}
    </div>
  );
};

export default Signup;
