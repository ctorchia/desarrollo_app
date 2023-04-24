import { URL_API } from '../../constants/database';

export const SELECT_LIST = 'SELECT_LIST';
export const GET_LISTS = 'GET_LISTS';
export const DELETE_LISTS = 'DELETE_LISTS';

export const selectList = (id) => ({
    type: SELECT_LIST,
    listId: id,
})

export const getLists = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/lists.json`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            console.log(response)
            const resData = await response.json();
            const lists = Object.keys(resData).map(key => {
                return {
                    id: key,
                    ...resData[key]
                }
            });
            dispatch({
                type: GET_LISTS,
                lists
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export const deleteLists = (id) => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/lists/${id}.json`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const resData = await response.json();
            console.log(resData);
            dispatch({
                type: DELETE_LISTS,
                id
            });
        } catch (error) {
            console.log(error);
        }
    }
}