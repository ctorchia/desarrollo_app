export const SELECT_PRODUCT = 'SELECT_PRODUCT'
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS'

export const selectProduct = (id) => ({
    type: SELECT_PRODUCT,
    productId: id,
})

export const filterProducts = (id) => ({
    type: FILTER_PRODUCTS,
    categoryId: id,
})

