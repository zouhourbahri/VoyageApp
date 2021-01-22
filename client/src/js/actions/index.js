import {
  REGISTER_USER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  PROFIL_USER,
  PROFIL_USER_FAIL,
  PROFIL_USER_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
} from "../constantes/actionTypes";
import axios from "axios";
import { setAlert } from "./Alert";
import '../../App.css';
//Signup
export const register = (newUser) => async (dispatch) => {
  dispatch({
    type: REGISTER_USER,
  });
  try {
    const addRes = await axios.post("/user/registeruser", newUser);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: addRes.data,
    });
    dispatch(setAlert("Register Success", "success"));
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data,
    });
    const { errors,msg } = error.response.data;
    console.log(errors)
    if (Array.isArray(errors)) {
      errors.map(err=>dispatch(setAlert(err.msg, 'danger')))
      //errors.forEach((err) => alert(err.msg));
  }
  if (msg) {
    dispatch(setAlert(msg, 'danger')) }
  }
};

//Signin
export const login = (loginReq) => async (dispatch) => {
  dispatch({
    type: LOGIN_USER,
  });
  try {
    const loginRes = await axios.post("/user/loginuser", loginReq);
    localStorage.setItem("token", loginRes.data.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: loginRes.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response,
    });
    const { errors,msg } = error.response.data;
    console.log(errors)
    if (Array.isArray(errors)) {
      errors.map(err=>dispatch(setAlert(err.msg, 'danger')))
      //errors.forEach((err) => alert(err.msg));
  }
  if (msg) {
    dispatch(setAlert(msg, 'danger')) }
  
  }
  
};

//Signout
export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
  try {
    dispatch({
      type: LOGOUT_USER_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: LOGOUT_USER_FAIL,
      payload: error.response.data,
    });
    const { errors,msg } = error.response.data;
    console.log(errors)
    if (Array.isArray(errors)) {
      errors.map(err=>dispatch(setAlert(err.msg, 'danger')))
      //errors.forEach((err) => alert(err.msg));
  }
  if (msg) {
    dispatch(setAlert(msg, 'danger')) }
  }
};

//Get user coordinates
export const getProfil = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: PROFIL_USER,
  });
  try {
    const isAuth = await axios.get("/user/currentuser", config);
    dispatch({
      type: PROFIL_USER_SUCCESS,
      payload: isAuth,
    });
  } catch (error) {
    dispatch({
      type: PROFIL_USER_FAIL,
      payload: error.response,
    });
    const { errors,msg } = error.response.data;
    console.log(errors)
    if (Array.isArray(errors)) {
      errors.map(err=>dispatch(setAlert(err.msg, 'danger')))
      //errors.forEach((err) => alert(err.msg));
  }
  if (msg) {
    dispatch(setAlert(msg, 'danger')) }
  }
};

