import {
  ADDUSER_POSTS,
  ADDUSER_POSTS_SUCCESS,
  ADDUSER_POSTS_FAIL,
  // GETUSER_POSTS,
  GETUSER_POSTS_FAIL,
  GETUSER_POSTS_SUCCESS,
  DELETEONE_POST,
  DELETEONE_POST_SUCCESS,
  DELETEONE_POST_FAIL,
  GETALL_POSTS,
  GETALL_POSTS_SUCCESS,
  GETALL_POSTS_FAIL,
  GETAGENCES_USER,
  GETAGENCES_USER_SUCCESS,
  GETAGENCES_USER_FAIL,
  GETOFFRES_USER,
  GETOFFRES_USER_SUCCESS,
  GETOFFRES_USER_FAIL,
  GETAGENCEUSER_OFFRES,
  GETAGENCEUSER_OFFRES_SUCCESS,
  GETAGENCEUSER_OFFRES_FAIL,
  NOTATE_AGENCE,
  NOTATE_AGENCE_SUCCESS,
  NOTATE_AGENCE_FAIL,
  LIKE_POST,
  LIKE_POST_SUCCESS,
  LIKE_POST_FAIL,
  LIKE_OFFRE,
  LIKE_OFFRE_SUCCESS,
  LIKE_OFFRE_FAIL,
  UNLIKE_POST,
  UNLIKE_POST_SUCCESS,
  UNLIKE_POST_FAIL,
  UNLIKE_OFFRE,
  UNLIKE_OFFRE_SUCCESS,
  UNLIKE_OFFRE_FAIL,
} from "../constantes/actionTypes";
import axios from "axios";
import { setAlert } from "./Alert";

// Add posts
export const addPosts = (directionPost) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: ADDUSER_POSTS,
  });
  try {
    const direction = await axios.post(
      "/user/currentuser",
      directionPost,
      config
    );
    dispatch({
      type: ADDUSER_POSTS_SUCCESS,
      payload: direction.data,
    });
    dispatch(setAlert("Post Added with Success", "success"));
  } catch (error) {
    dispatch({
      type: ADDUSER_POSTS_FAIL,
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

//Get All Posts Of One User
export const getPosts = (user) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  // dispatch({
  //   type: GETUSER_POSTS,
  // });
  try {
    const allPosts = await axios.get(`/user/currentuser/posts/${user}`, config);
    dispatch({
      type: GETUSER_POSTS_SUCCESS,
      payload: allPosts.data,
    });
  } catch (error) {
    dispatch({
      type: GETUSER_POSTS_FAIL,
      payload: error.response.data,
    });
  }
};

// Delete One Post Of One User
export const deletePost = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: DELETEONE_POST,
  });
  try {
    const deletedpost = await axios.delete(
      `/user/currentuser/posts/${id}`,
      config
    );
    dispatch({
      type: DELETEONE_POST_SUCCESS,
      payload: deletedpost.data,
    });
    dispatch(setAlert("Post Deleted with Success", "success"));
  } catch (error) {
    dispatch({
      type: DELETEONE_POST_FAIL,
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

//GET ALL EXISTING POSTS
export const addAll = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: GETALL_POSTS,
  });
  try {
    const allExisting = await axios.get("/user/currentuser/posts", config);
    dispatch({
      type: GETALL_POSTS_SUCCESS,
      payload: allExisting.data,
    });
  } catch (error) {
    dispatch({
      type: GETALL_POSTS_FAIL,
      payload: error.response.data,
    });
  }
};


//GET ALL AGENCES
export const addAgences = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: GETAGENCES_USER,
  });
  try {
    const allAgences = await axios.get("/user/currentuser/agences",config);
    dispatch({
      type: GETAGENCES_USER_SUCCESS,
      payload: allAgences.data,
    });
  } catch (error) {
    dispatch({
      type: GETAGENCES_USER_FAIL,
      payload: error.response.data,
    });
  }
};

//NOTATE AGENCE
export const notate = (id, rate) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: NOTATE_AGENCE,
  });
  try {
    await axios.put(`/user/currentuser/agences/${id}/${rate}`,null, config);
    const allAgences = await axios.get("/user/currentuser/agences",config);
    dispatch({
      type: NOTATE_AGENCE_SUCCESS,
      payload: allAgences.data,
    });
  } catch (error) {
    dispatch({
      type: NOTATE_AGENCE_FAIL,
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

// GET ALL OFFRES FOR USER
export const addOffres = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: GETOFFRES_USER,
  });
  try {
    const allOffres = await axios.get("/user/currentuser/agences/offres", config);
    dispatch({
      type: GETOFFRES_USER_SUCCESS,
      payload:allOffres.data,
    });
  } catch (error) {
    dispatch({
      type: GETOFFRES_USER_FAIL,
      payload:error.response.data,
    });
  }
};

//GET AGENCE'S OFFRES FOR USER
export const viewOffres = (agenceID) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: GETAGENCEUSER_OFFRES,
  });
  try {
    const agenceOffres = await axios.get(`/user/currentuser/agences/offres/${agenceID}`,config);
    dispatch({
      type: GETAGENCEUSER_OFFRES_SUCCESS,
      payload: agenceOffres.data,
    });
  } catch (error) {
    dispatch({
      type: GETAGENCEUSER_OFFRES_FAIL,
      payload:error.response.data,
    });
  }
};

//LIKE A POST
export const likePost = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: LIKE_POST,
  });
  try {
    const likedpost = await axios.put(`/user/currentuser/posts/like/${id}`,null ,config);
    dispatch({
      type: LIKE_POST_SUCCESS,
      payload: likedpost.data,
    });
    dispatch(setAlert("Post Got Liked", "success"));
  } catch (error) {
    dispatch({
      type: LIKE_POST_FAIL,
      payload:error.response.data,
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

//UNLIKE A POST
export const unLikePost = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: UNLIKE_POST,
  });
  try {
    const unlikedPost = await axios.put(`/user/currentuser/posts/unlike/${id}`, null , config);
    dispatch({
      type: UNLIKE_POST_SUCCESS,
      payload: unlikedPost.data,
    });
    dispatch(setAlert("Like removed for this post", "success"));
  } catch (error) {
    dispatch({
      type: UNLIKE_POST_FAIL,
      payload:error.response.data,
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

//LIKE AN OFFRE
export const likeOffre = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: LIKE_OFFRE,
  });
  try {
    const likedoffre = await axios.put(`/user/currentuser/offres/like/${id}`,null ,config);
    dispatch({
      type: LIKE_OFFRE_SUCCESS,
      payload: likedoffre.data,
    });
    dispatch(setAlert("Offre Got Liked", "success"));
  } catch (error) {
    dispatch({
      type: LIKE_OFFRE_FAIL,
      payload:error.response.data,
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

//UNLIKE AN OFFRE 
export const unLikeOffre = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: UNLIKE_OFFRE,
  });
  try {
    const unlikedOffre = await axios.put(`/user/currentuser/offres/unlike/${id}`, null , config);
    dispatch({
      type: UNLIKE_OFFRE_SUCCESS,
      payload: unlikedOffre.data,
    });
    dispatch(setAlert("Like removed for this offre", "success"));
  } catch (error) {
    dispatch({
      type: UNLIKE_OFFRE_FAIL,
      payload:error.response.data,
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