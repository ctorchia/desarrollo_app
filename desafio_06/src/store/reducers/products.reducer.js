import {FILTER_PRODUCTS, SELECT_PRODUCT} from '../actions/products.action'

import {PRODUCTS} from '../../data/products'

const initialState = {
    products: PRODUCTS,
    selcted: null,
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
        default:
            return state
    }
}

export default ProductReducer