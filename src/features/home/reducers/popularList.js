import {
    SET_POPULARLIST_LOADING,
    SET_POPULARLIST_SUCCESS,
    SET_POPULARLIST_FAILURE,
} from '../actions/types';

const popularList = (state = {}, action) => {
    switch (action.type) {
        case SET_POPULARLIST_LOADING:
            return {
                ...state,
                loading: true,
                error: false,
                success: false,
                data: [],
            };
        case SET_POPULARLIST_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                success: true,
                data: action.payload,
            };
        case SET_POPULARLIST_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                success: false,
                data: [],
            };
        default:
            return state;
    }
};

export default popularList;
