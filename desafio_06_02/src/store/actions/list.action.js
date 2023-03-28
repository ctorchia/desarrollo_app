export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const CLEAR_LIST = 'CLEAR_LIST'
export const CONFIRM_LIST = 'CONFIRM_LIST'

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
    return {
        type: CONFIRM_LIST,
        list: list,
        total: total,
    }
}

