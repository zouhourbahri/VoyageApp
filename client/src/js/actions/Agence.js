import axios from "axios";
import {
  LOGIN_AGENCE,
  LOGIN_AGENCE_FAIL,
  LOGIN_AGENCE_SUCCESS,
  LOGOUT_AGENCE,
  LOGOUT_AGENCE_FAIL,
  LOGOUT_AGENCE_SUCCESS,
  PROFIL_AGENCE,
  PROFIL_AGENCE_FAIL,
  PROFIL_AGENCE_SUCCESS,
  REGISTER_AGENCE,
  REGISTER_AGENCE_FAIL,
  REGISTER_AGENCE_SUCCESS,
} from "../constantes/actionTypes";
import { setAlert } from "./Alert";

//Register
export const registerAgency = (newAgence) => async (dispatch) => {
  dispatch({
    type: REGISTER_AGENCE,
  });
  try {
    const addagence = await axios.post("/agence/registeragence", newAgence);
    dispatch({
      type: REGISTER_AGENCE_SUCCESS,
      payload: addagence.data,
    });
    dispatch(setAlert("Register Success", "success"));

  } catch (error) {
    alert(error.response.data.msg);
    dispatch({
      type: REGISTER_AGENCE_FAIL,
      payload: error.response.data,
    });
    const { errors,msg } = error.response;
    console.log(errors)
    if (Array.isArray(errors)) {
      errors.map(err=>dispatch(setAlert(err.msg, 'danger')))
      //errors.forEach((err) => alert(err.msg));
  }
  if (msg) {
    dispatch(setAlert(msg, 'danger')) }
  }
};

//login
export const loginAgency = (loginRequest) => async (dispatch) => {
  dispatch({
    type: LOGIN_AGENCE,
  });
  try {
    const loginReq = await axios.post("/agence/loginagence", loginRequest);
    loginReq && localStorage.setItem("token", loginReq.data && loginReq.data.token);
    dispatch({
      type: LOGIN_AGENCE_SUCCESS,
      payload: loginReq.data,
    });
  } catch (error) {
    alert(error.response.data.msg);
    dispatch({
      type: LOGIN_AGENCE_FAIL,
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

//GET THE PROFIL
export const agenceProfil = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: PROFIL_AGENCE,
  });
  try {
    const isAuth = await axios.get("/agence/profilagence", config);
    dispatch({
      type: PROFIL_AGENCE_SUCCESS,
      payload: isAuth,
    });
  } catch (error) {
    dispatch({
      type: PROFIL_AGENCE_FAIL,
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

//logout
export const logoutAgency = () => async (dispatch) => {
  dispatch({
    type: LOGOUT_AGENCE,
  });
  try {
    dispatch({
      type: LOGOUT_AGENCE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: LOGOUT_AGENCE_FAIL,
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
