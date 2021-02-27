import DISHES from '../Data/Dish/dishes';
import COMMENTS from '../Data/comments';

const initialState = {
    dishes: DISHES,
    comments: COMMENTS,

}

export const Reducer = (state = initialState, action) => {
    // console.log("from action reducer", action)
    if (action.type === 'ADD_COMMENT') {
        let comment = action.payload;
        comment.id = state.comments.length;
        comment.date = new Date().toDateString();
        console.log("from payload: ", comment);
        return {
            ...state,
            comments: state.comments.concat(comment)
        }
    }
    return state;
}