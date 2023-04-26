import { URL_API } from '../../constants/database';

export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const CLEAR_LIST = 'CLEAR_LIST'
export const CONFIRM_LIST = 'CONFIRM_LIST'
export const MOVE_TO_CART = 'MOVE_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        item: item,
    }
}

export const removeItem = (itemId) => {
    return {
        type: REMOVE_ITEM,
        itemId: itemId,
    }
}

export const clearList = () => {
    return {
        type: CLEAR_LIST,
    }
}

export const confirmList = (list, total) => {
    if (list.length !== 0) {    
        return async dispatch => {
            try {

                const response = await fetch(URL_API + 'lists.json', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        date: new Date(),
                        items: list,
                        total: total
                    }),
                });

                const result = await response.json();
                dispatch({
                    type: CONFIRM_LIST,
                    confirm: true
                });
            } catch (error) {
                console.error(error)
            }
        }
    } else {
        return {
            type: CONFIRM_LIST,
            confirm: false
        }
    }
}

export const moveToCart = (itemId) => {
    return {
        type: MOVE_TO_CART,
        itemId: itemId,
    }
}

export const removeFromCart = (itemId) => {
    return {
        type: REMOVE_FROM_CART,
        itemId: itemId,
    }
}

