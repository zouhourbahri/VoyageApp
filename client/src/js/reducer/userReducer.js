import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGIN_USER,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  PROFIL_USER,
  PROFIL_USER_FAIL,
  PROFIL_USER_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  REGISTER_USER,
} from "../constantes/actionTypes";

const initialState = {
  loading: false,
  user: null,
  errors: null,
  token: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGOUT_USER:
    case PROFIL_USER:
    case REGISTER_USER:
    case LOGIN_USER:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
      };
    case PROFIL_USER_FAIL:
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload,
      };
    case LOGOUT_USER_SUCCESS:
      localStorage.removeItem("token");
      return{
        ...state,
        loading:false,
        user: null,
        errors: null,
        isAuth: null,
        token : null,
      }
    case PROFIL_USER_SUCCESS:
        return {
            ...state,
            loading:false,
            isAuth:payload,
            user : payload.data,
        }
    default:
      return state;
  }
};

export default userReducer;
