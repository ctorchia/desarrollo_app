import { URL_API } from '../../constants/database';

export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const CLEAR_LIST = 'CLEAR_LIST'
export const CONFIRM_LIST = 'CONFIRM_LIST'
export const MOVE_TO_CART = 'MOVE_TO_CART'

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
    return async dispatch => {
        try {
            
            const response = await fetch(URL_API+'lists.json', {
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
            // console.log(result);
            dispatch({
                type: CONFIRM_LIST,
                confirm: true
            });
        } catch (error) {
            console.error(error)
        }
    }
}

export const moveToCart = (itemId) => {
    console.log("En list.action:" + itemId)

    return {
        type: MOVE_TO_CART,
        itemId: itemId,
    }
}

