import { ADD_PRODUCT, FILTER_PRODUCTS, SELECT_PRODUCT } from '../actions/products.action'

import { PRODUCTS } from '../../data/products'
import Product from '../../models/Product'

const initialState = {
    products: PRODUCTS,
    selected: null,
    filteredProducts: []
}

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_PRODUCT:
            return {
                ...state,
                selected: state.products.find(product => product.id === action.productId)
            }
        case FILTER_PRODUCTS:
            return {
                ...state,
                filteredProducts: state.products.filter(product => product.category === action.categoryId)
            }
        case ADD_PRODUCT:
            const newProduct = new Product(Date.now(), action.payload.name, action.payload.image)
            console.log(newProduct)
            
            return {
                ...state,
                products: state.products.push(newProduct)
            }
        default:
            return state
    }
}

export default ProductReducer