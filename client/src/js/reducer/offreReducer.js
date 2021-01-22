import {
    ADD_OFFRE,
    ADD_OFFRE_FAIL,
    ADD_OFFRE_SUCCESS,
    DELETE_OFFRE,
    DELETE_OFFRE_FAIL,
    DELETE_OFFRE_SUCCESS,
    GET_ALLOFFRES,
    GET_ALLOFFRES_FAIL,
    GET_ALLOFFRES_SUCCESS,
} from "../constantes/actionTypes";

const initialState = {
    loading: false,
    offres: null,
    errors: null,
    allOffres: [],
};

const offreReducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case DELETE_OFFRE:
    case GET_ALLOFFRES:
    case ADD_OFFRE:
        return {
        ...state,
        loading: true,
        };
    case ADD_OFFRE_SUCCESS:
        return {
        ...state,
        loading: false,
        offres: payload,
        Authorized: payload,
        };
    case GET_ALLOFFRES_SUCCESS:
        return {
        ...state,
        loading: false,
        Authorized: payload,
        allOffres: payload,
        };
    case DELETE_OFFRE_SUCCESS:
        return {
        ...state,
        loading: false,
        deleted: payload,
        };
    case DELETE_OFFRE_FAIL:
    case GET_ALLOFFRES_FAIL:
    case ADD_OFFRE_FAIL:
        return {
        ...state,
        loading: false,
        errors: payload,
        };
    default:
        return state;
    }
};

export default offreReducer;
