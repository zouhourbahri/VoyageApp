import axios from "axios";
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
} from "../constantes/actionTypes";
import { setAlert } from "./Alert";

// GET ALL USERS
export const getAllUsers = () => async (dispatch) => {
    const token = localStorage.getItem("token");
    const config = {
    headers: {
        Authorization: token,
    },
};
dispatch({
    type: GET_ALLUSERS,
});
    try {
    const allUsers = await axios.get("/user/admin/allUsers", config);
    dispatch({
    type: GET_ALLUSERS_SUCCESS,
    payload: allUsers,
    });
} catch (error) {
    dispatch({
    type: GET_ALLUSERS_FAIL,
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

//GET ALL AGENCES
export const getAllAgences = () => async (dispatch) => {
    const token = localStorage.getItem("token");
    const config = {
    headers: {
        Authorization: token,
    },
};
dispatch({
    type: GET_ALLAGENCES,
});
    try {
    const allAgences = await axios.get("/user/admin/allAgences", config);
    dispatch({
    type: GET_ALLAGENCES_SUCCESS,
    payload: allAgences,
    });
} catch (error) {
    dispatch({
    type: GET_ALLAGENCES_FAIL,
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

//ADD ADMIN
export const addAdmin = (id) => async (dispatch) => {
const token = localStorage.getItem("token");
const config = {
    headers: {
        Authorization: token,
    },
};
dispatch({
    type: ADD_ADMIN,
});
    try {
    const newAdmin = await axios.patch(
    `/user/admin/addAdmin/${id}`,
    null,
    config
    );
    dispatch({
    type: ADD_ADMIN_SUCCESS,
    payload: newAdmin,
    });
    dispatch(getAllUsers());
    dispatch(setAlert("Admin Added", "success"));
} catch (error) {
    dispatch({
    type: ADD_ADMIN_FAIL,
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

//BAN A USER
export const banUser = (id) => async (dispatch) => {
const token = localStorage.getItem("token");
const config = {
    headers: {
    Authorization: token,
    },
};
dispatch({
    type: BAN_USER,
});
    try {
    const bannedUser = await axios.patch(
        `/user/admin/banUser/${id}`,
        null,
        config
    );
    dispatch({
        type: BAN_USER_SUCCESS,
        payload: bannedUser,
            });
    dispatch(getAllUsers());
    dispatch(setAlert("User Got BANNED", "success"));
} catch (error) {
    dispatch({
        type: BAN_USER_FAIL,
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
//BAN AN AGENCE
export const banAgence = (id) => async (dispatch) => {
const token = localStorage.getItem("token");
const config = {
    headers: {
    Authorization: token,
    },
};
dispatch({
    type: BAN_AGENCE,
});
try {
    const bannedAgence = await axios.patch(
    `/user/admin/banAgence/${id}`,
    null,
    config
    );
    dispatch({
    type: BAN_AGENCE_SUCCESS,
    payload: bannedAgence,
    });
    dispatch(setAlert("Agence Got BANNED", "success"));
} catch (error) {
    dispatch({
    type: BAN_AGENCE_FAIL,
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

//DELETE A USER
export const deleteUser = (id) => async (dispatch) => {
const token = localStorage.getItem("token"),
    config = {
    headers: {
        Authorization: token,
    },
    };
dispatch({
    type: DELETE_USER,
});
try {
    const deletedUser = await axios.delete(
    `/user/admin/deleteUser/${id}`,
    config
    );
    dispatch({
    type: DELETE_USER_SUCCESS,
    payload: deletedUser,
    });
    dispatch(setAlert("User DELETED SUCCESSFULLY", "success"));
} catch (error) {
    dispatch({
    type: DELETE_USER_FAIL,
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

//DELETE AN AGENCE
export const deleteAgence = (id) => async (dispatch) => {
const token = localStorage.getItem("token");
const config = {
    headers: {
    Authorization: token,
    },
};
dispatch({
    type: DELETE_AGENCE,
});
try {
    const deletedAgence = await axios.delete(
    `/user/admin/deleteAgence/${id}`,
    config
    );
    dispatch({
    type: DELETE_AGENCE_SUCCESS,
    payload: deletedAgence,
    });
    dispatch(setAlert("AGENCE DELETED SUCCESSFULLY", "success"));
} catch (error) {
    dispatch({
    type: DELETE_AGENCE_FAIL,
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
