const {
  ADDUSER_POSTS,
  ADDUSER_POSTS_SUCCESS,
  ADDUSER_POSTS_FAIL,
  GETUSER_POSTS,
  GETUSER_POSTS_FAIL,
  GETUSER_POSTS_SUCCESS,
  DELETEONE_POST,
  DELETEONE_POST_FAIL,
  DELETEONE_POST_SUCCESS,
  GETALL_POSTS,
  GETALL_POSTS_SUCCESS,
  GETAGENCES_USER,
  GET_ALLAGENCES_FAIL,
  GETAGENCES_USER_SUCCESS,
  GETOFFRES_USER,
  GETOFFRES_USER_FAIL,
  GETOFFRES_USER_SUCCESS,
  GETAGENCEUSER_OFFRES,
  GETAGENCEUSER_OFFRES_FAIL,
  GETAGENCEUSER_OFFRES_SUCCESS,
  NOTATE_AGENCE,
  NOTATE_AGENCE_FAIL,
  NOTATE_AGENCE_SUCCESS,
  LIKE_POST_FAIL,
  LIKE_POST,
  LIKE_POST_SUCCESS,
  LIKE_OFFRE,
  LIKE_OFFRE_SUCCESS,
  LIKE_OFFRE_FAIL,
} = require("../constantes/actionTypes");

const initialState = {
  loading: false,
  posts: null,
  errors: null,
  allPosts:[],
  allExist: [],
  allAgences: [],
  allOffres: [],
  agenceOffres: [],
  Likes:[],
  LikedO: [],
};

const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LIKE_OFFRE:
    case LIKE_POST:
    case NOTATE_AGENCE:
    case GETAGENCEUSER_OFFRES:
    case GETOFFRES_USER:
    case GETAGENCES_USER:
    case GETALL_POSTS:
    case DELETEONE_POST:
    case GETUSER_POSTS:
    case ADDUSER_POSTS:
      return {
        ...state,
        loading: true,
      };
    case ADDUSER_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: payload,
        isAuth: payload,
      };
    case GETUSER_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: payload,
        allPosts:payload,
      };
    case GETAGENCES_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        allAgences: payload,
      };
    case GETOFFRES_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        allOffres:payload,
      };
    case GETAGENCEUSER_OFFRES_SUCCESS:
      return {
        ...state,
        loading: false,
        agenceOffres: payload,
      };
    case NOTATE_AGENCE_SUCCESS:
      return {
        ...state,
        loading:false,
        allAgences: payload,
      };
    case LIKE_POST_SUCCESS:
      return{
        ...state,
        loading:false,
        Likes: payload,
      };
    case LIKE_OFFRE_SUCCESS:
      return {
        ...state,
        loading:false,
        LikedO: payload,
      };
    case LIKE_OFFRE_FAIL:
    case LIKE_POST_FAIL:
    case NOTATE_AGENCE_FAIL:
    case GETAGENCEUSER_OFFRES_FAIL:
    case GETOFFRES_USER_FAIL:
    case GET_ALLAGENCES_FAIL:
    case GETUSER_POSTS_FAIL:
    case DELETEONE_POST_FAIL:
    case ADDUSER_POSTS_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case DELETEONE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        deleted : payload,
      };
    case GETALL_POSTS_SUCCESS:
      return {
        ...state,
        loading:false,
        allExist: payload,
      }
    default:
      return state;
  }
};

export default postsReducer;
