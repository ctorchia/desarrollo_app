import { ADD_ITEM, CLEAR_LIST, CONFIRM_LIST, MOVE_TO_CART, REMOVE_FROM_CART, REMOVE_ITEM } from "../actions/list.action";

import { LIST } from "../../data/list";

const initialState = {
    items: [],
    itemsInCart: [],
    total: 0,
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

        case MOVE_TO_CART:
            console.log("En Reducer 1:" + action.itemId)
            const itemToCart = state.items.find(item => item.id === action.itemId)
            console.log("En Reducer 2:" + itemToCart.name)
            console.log("En Reducer 3:" + state.items.length)
            const filteredItemsToCart = state.items.filter(item => item.id !== action.itemId)
            console.log("En Reducer 4:" + filteredItemsToCart.length)
            const itemsInCart = [...state.itemsInCart, itemToCart]
            return {
                ...state,
                items: filteredItemsToCart,
                itemsInCart: itemsInCart,
                // total: filteredItemsToCart.length
            }

        case REMOVE_FROM_CART:
            const itemFromCart = state.itemsInCart.find(item => item.id === action.itemId)
            const filteredItemsFromCart = state.itemsInCart.filter(item => item.id !== action.itemId)
            const items = [...state.items, itemFromCart]
            return {
                ...state,
                items: items,
                itemsInCart: filteredItemsFromCart,
                // total: filteredItemsToCart.length
            }
            
        case CONFIRM_LIST:

        default:
            return state
    }
}

export default ListReducer