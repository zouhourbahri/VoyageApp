import axios from "axios";
import {
  ADD_OFFRE,
  ADD_OFFRE_FAIL,
  ADD_OFFRE_SUCCESS,
  DELETE_OFFRE,
  DELETE_OFFRE_FAIL,
  DELETE_OFFRE_SUCCESS,
  // GET_ALLOFFRES,
  GET_ALLOFFRES_FAIL,
  GET_ALLOFFRES_SUCCESS,
} from "../constantes/actionTypes";
import { setAlert } from "./Alert";

// ADD OFFRE
export const addOffres = (newOffres) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: ADD_OFFRE,
  });
  try {
    const offre = await axios.post(
      "/agence/profilagence/offres",
      newOffres,
      config
    );
    dispatch({
      type: ADD_OFFRE_SUCCESS,
      payload: offre.data,
    });
    dispatch(setAlert("Offre Added With Success", "success"));
  } catch (error) {
    dispatch({
      type: ADD_OFFRE_FAIL,
      payload: error.response.data,
    });
    const { errors, msg } = error.response.data;
    console.log(errors);
    if (Array.isArray(errors)) {
    errors.map((err) => dispatch(setAlert(err.msg, "danger")));
      //errors.forEach((err) => alert(err.msg));
    }
    if (msg) {
    dispatch(setAlert(msg, "danger"));
    }
  }
};

//Get AllOffres
export const getOffres = (agence) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  // dispatch({
  //   type: GET_ALLOFFRES,
  // });
  try {
    const allOffres = await axios.get(
      `/agence/profilagence/offres/${agence}`,
      config
    );
    dispatch({
      type: GET_ALLOFFRES_SUCCESS,
      payload: allOffres.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALLOFFRES_FAIL,
      payload: error.response.data,
    });
  }
};

// Delete An Offre
export const deleteOffre = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: DELETE_OFFRE,
  });
  try {
    const deleteOffre = await axios.delete(
      `/agence/profilagence/offres/${id}`,config
    );
    dispatch({
      type: DELETE_OFFRE_SUCCESS,
      payload: deleteOffre.data,
    });
    dispatch(setAlert("Offre Deleted With Success", "success"));
  } catch (error) {
    dispatch({
      type: DELETE_OFFRE_FAIL,
      payload: error.response.data,
    });
    const { errors, msg } = error.response.data;
    console.log(errors);
    if (Array.isArray(errors)) {
    errors.map((err) => dispatch(setAlert(err.msg, "danger")));
      //errors.forEach((err) => alert(err.msg));
    }
    if (msg) {
    dispatch(setAlert(msg, "danger"));
    }
  }
};
