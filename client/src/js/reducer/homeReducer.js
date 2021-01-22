import { HOME_AGENCES, HOME_AGENCES_FAIL, HOME_AGENCES_SUCCESS, HOME_OFFRES, HOME_OFFRES_SUCCESS } from "../constantes/actionTypes";

const initialState={
    loading:false,
    allAgences:[],
    allOffres:[],
    errors:[],
}

const homeReducer = (state = initialState , {type, payload}) => {
    switch (type) {
        case HOME_AGENCES:
        case HOME_OFFRES:
                return{
                    ...state,
                    loading:true,
                };
        case HOME_OFFRES_SUCCESS:
            return{
                ...state,
                loading:false,
                allOffres:payload,
            };
        case HOME_AGENCES_SUCCESS:
            return{
                ...state,
                loading:false,
                allAgences:payload,
                }
        case HOME_AGENCES_FAIL:
        case HOME_AGENCES_FAIL:
            return{
                ...state,
                loading:false,
                errors:payload,
            }
        default:
            return state;
    }
};

export default homeReducer; 

