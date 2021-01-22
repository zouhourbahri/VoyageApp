import {
  LOGIN_AGENCE,
  LOGIN_AGENCE_FAIL,
  LOGIN_AGENCE_SUCCESS,
  LOGOUT_AGENCE,
  LOGOUT_AGENCE_SUCCESS,
  PROFIL_AGENCE,
  PROFIL_AGENCE_FAIL,
  PROFIL_AGENCE_SUCCESS,
  REGISTER_AGENCE,
  REGISTER_AGENCE_FAIL,
  REGISTER_AGENCE_SUCCESS,
} from "../constantes/actionTypes";

const initialState = {
  loading: false,
  agence: null,
  errors: null,
};

const agenceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGOUT_AGENCE:
    case PROFIL_AGENCE:
    case LOGIN_AGENCE:
    case REGISTER_AGENCE:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_AGENCE_SUCCESS:
      return {
        ...state,
        loading: false,
        agence: payload,
      };
    case LOGIN_AGENCE_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload,
      };
    case PROFIL_AGENCE_SUCCESS:
      return {
        ...state,
        loading: false,
        Authorized: payload,
        agence: payload,
      };
      case LOGOUT_AGENCE_SUCCESS:
        localStorage.removeItem("token");
        return {
          ...state,
          loading: false,
          agence : null,
          errors:null,
        };
    case PROFIL_AGENCE_FAIL:
    case LOGIN_AGENCE_FAIL:
    case REGISTER_AGENCE_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    default:
      return state;
  }
};

export default agenceReducer;
