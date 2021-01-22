import {
  ADD_ADMIN,
  ADD_ADMIN_FAIL,
  ADD_ADMIN_SUCCESS,
  BAN_AGENCE,
  BAN_AGENCE_FAIL,
  BAN_AGENCE_SUCCESS,
  BAN_USER,
  BAN_USER_FAIL,
  BAN_USER_SUCCESS,
  DELETE_AGENCE,
  DELETE_AGENCE_FAIL,
  DELETE_AGENCE_SUCCESS,
  DELETE_USER,
  DELETE_USER_FAIL,
  DELETE_USER_SUCCESS,
  GET_ALLAGENCES,
  GET_ALLAGENCES_FAIL,
  GET_ALLAGENCES_SUCCESS,
  GET_ALLUSERS,
  GET_ALLUSERS_FAIL,
  GET_ALLUSERS_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_FAIL,
  LOGOUT_USER_SUCCESS,
} from "../constantes/actionTypes";

const initialState = {
  loading: false,
  allUsers: null,
  allAgences: null,
  errors: null,
};

const adminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGOUT_USER:
    case DELETE_AGENCE:
    case DELETE_USER:
    case BAN_AGENCE:
    case BAN_USER:
    case ADD_ADMIN:
    case GET_ALLAGENCES:
    case GET_ALLUSERS:
      return {
        ...state,
        loading: true,
      };
    case GET_ALLUSERS_SUCCESS:
      return {
        ...state,
        loading: false,
        allUsers: payload.data,
      };
    case GET_ALLAGENCES_SUCCESS:
      return {
        ...state,
        loading: false,
        allAgences: payload.data,
      };
    case ADD_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
        newAdmin: payload.data,
      };
    case BAN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        bannedUser: payload,
      };
    case BAN_AGENCE_SUCCESS:
      return {
        ...state,
        loading: false,
        bannedAgence: payload,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        deletedUser: payload,
      };
    case DELETE_AGENCE_SUCCESS:
      return {
        ...state,
        loading: false,
        deletedAgence: payload,
      };
    case LOGOUT_USER_SUCCESS:
      localStorage.removeItem("token");
      return {
        ...state,
        loading: false,
        allUsers: null,
        allAgences: null,
      };
    case LOGOUT_USER_FAIL:
    case DELETE_AGENCE_FAIL:
    case DELETE_USER_FAIL:
    case BAN_AGENCE_FAIL:
    case BAN_USER_FAIL:
    case ADD_ADMIN_FAIL:
    case GET_ALLAGENCES_FAIL:
    case GET_ALLUSERS_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    default:
      return state;
  }
};

export default adminReducer;
