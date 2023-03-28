import { ADD_ITEM, CLEAR_LIST, CONFIRM_LIST, REMOVE_ITEM } from "../actions/list.action";

import { LIST } from "../../data/list";

const initialState = {
    items: [],
    total: LIST.length,
}

const ListReducer = (state = initialState, action) => {
    
    switch (action.type) {

        case ADD_ITEM:

            let updatedItems = []
            if (state.items.find(item => item.id === action.item.id)) {
                updatedItems = state.items.map(item => {
                    if (item.id === action.item.id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        }
                    }
                    return item
                })
            } else {
                updatedItems = [...state.items, action.item]
            }
            return {
                ...state,
                items: updatedItems,
                total: updatedItems.length
            }

        case REMOVE_ITEM:
            const filteredItems = state.items.filter(item => item.id !== action.itemId)  
            return {
                ...state,
                items: filteredItems,
                total: filteredItems.length
            }

        case CLEAR_LIST:
            return {
                ...state,
                items: [],
                total: 0
            }
        case CONFIRM_LIST:
            return {
                ...state,
                items: action.list,
                total: action.total
            }
        default:
            return state
    }
}

export default ListReducer