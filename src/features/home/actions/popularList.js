import {
    SET_POPULARLIST_LOADING,
    SET_POPULARLIST_SUCCESS,
    SET_POPULARLIST_FAILURE,
} from './types';
import {callApiMovieDBPopular} from '../services/services';

const startPopularList = async dispatch => {
    try {
        //loading
        dispatch({type: SET_POPULARLIST_LOADING});
        const res = await callApiMovieDBPopular();
        const {data, error} = res;
        if (!error) {
            //success
            dispatch({type: SET_POPULARLIST_SUCCESS, payload: data});
        } else {
            //failure
            dispatch({type: SET_POPULARLIST_FAILURE});
        }
    } catch (error) {
        //failure
        dispatch({type: SET_POPULARLIST_FAILURE});
    }
};

export default startPopularList;
