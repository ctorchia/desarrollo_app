import * as FileSystem from 'expo-file-system'

export const SELECT_PRODUCT = 'SELECT_PRODUCT'
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS'
export const ADD_PRODUCT = 'ADD_PRODUCT'

export const selectProduct = (id) => ({
    type: SELECT_PRODUCT,
    productId: id,
})

export const filterProducts = (id) => ({
    type: FILTER_PRODUCTS,
    categoryId: id,
})

export const addProduct = (name, image, description, category) => {
    console.log(image)
    console.log(description)

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

        // console.log(name)
        // console.log(image)

        dispatch({ type: ADD_PRODUCT, payload: { name, image: Path, description, category } })
    }
}

