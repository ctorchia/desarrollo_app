import { LIST } from "../../data/list";

const initialState = {
    items: LIST,
    total: 50,
}

const ListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_LIST':
            return {
                ...state,
                list: [...state.list, action.item],
                total: state.total + action.item.price
            }
        case 'REMOVE_FROM_LIST':
            return {
                ...state,
                list: state.list.filter(item => item.id !== action.itemId),
                total: state.total - action.item.price
            }
        default:
            return state
    }
}

export default ListReducer