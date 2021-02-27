import COMMENTS from '../Data/comments';
import { combineReducers } from 'redux'
import * as actionTypes from './actionType';

// const initialState = {
//     dishes: DISHES,
//     comments: COMMENTS,

// }

const dishReducer = (dishState = { isLoading: false, dishes: [] }, action) => {
    switch (action.type) {
        case actionTypes.DISHES_LOADING:
            return {
                ...dishState,
                isLoading: true,
                dishes: []
            }

        case actionTypes.LOAD_DISHES:
            return {
                ...dishState,
                isLoading: false,
                dishes: action.payload
            }
        default:
            return dishState;
    }

}

const commentReducer = (commentState = COMMENTS, action) => {
    switch (action.type) {
        case actionTypes.ADD_COMMENT:
            let comment = action.payload;
            // comment.id = state.comments.length;
            comment.id = commentState.length;
            comment.date = new Date().toDateString();
            // console.log("from payload: ", comment);
            // return {
            //     ...state,
            //     comments: state.comments.concat(comment)
            // }
            return commentState.concat(comment);

        default:
            return commentState;
    }
    // if (action.type === 'ADD_COMMENT') {

    // }

}

export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer
})