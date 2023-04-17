import { DELETE_LISTS, GET_LISTS } from '../actions/lists.action';

const initialState ={
    list:[]
}

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LISTS:
            return {
                ...state,
                list: action.lists
            }
        case DELETE_LISTS:
            return {
                ...state,
                list: state.list.filter(list => list.id !== action.id)
            }
        default:
            return state;
    }
}

export default listsReducer;