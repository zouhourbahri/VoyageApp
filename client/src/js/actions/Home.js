import axios from "axios";
import {
  HOME_AGENCES,
  HOME_AGENCES_FAIL,
  HOME_AGENCES_SUCCESS,
  HOME_OFFRES,
  HOME_OFFRES_FAIL,
  HOME_OFFRES_SUCCESS,
} from "../constantes/actionTypes";

//GET ALL AGENCES
export const homeAgences = () => async (dispatch) => {
  dispatch({
    type: HOME_AGENCES,
  });
  try {
    const allAgences = await axios.get("/home");
    dispatch({
      type: HOME_AGENCES_SUCCESS,
      payload: allAgences.data,
    });
  } catch (error) {
    dispatch({
      type: HOME_AGENCES_FAIL,
      payload: error.response,
    });
  }
};

//GET ALL OFFRES

export const homeOffres = () => async (dispatch) => {
  dispatch({
    type: HOME_OFFRES,
  });
  try {
    const allOffres = await axios.get("/offres");
    dispatch({
      type: HOME_OFFRES_SUCCESS,
      payload: allOffres.data,
    });
  } catch (error) {
    dispatch({
      type: HOME_OFFRES_FAIL,
      payload: error.response,
    });
  }
};
