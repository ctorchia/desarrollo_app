import { DELETE_LISTS, GET_LISTS, SELECT_LIST } from '../actions/lists.action';

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

        case SELECT_LIST:
            return {
                ...state,
                selected: state.list.find(list => list.id === action.listId)
            }
            
        default:
            return state;
    }
}

export default listsReducer;