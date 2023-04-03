import * as FileSystem from 'expo-file-system'

export const SELECT_PRODUCT = 'SELECT_PRODUCT'
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS'
export const ADD_PRODUCT = 'ADD_PRODUCTS'

export const selectProduct = (id) => ({
    type: SELECT_PRODUCT,
    productId: id,
})

export const filterProducts = (id) => ({
    type: FILTER_PRODUCTS,
    categoryId: id,
})

export const addProduct = (title, image) => {
    console.log(image)
    return async dispatch => {
        const fileName = image.split('/').pop()
        const Path = FileSystem.documentDirectory + fileName

        try {
            FileSystem.moveAsync({
                from: image,
                to: Path
            })
        } catch (error) {
            console.log(error.message)
            throw error
        }

        dispatch({type: ADD_PRODUCT, payload: {title, image: Path}})
    }
}

