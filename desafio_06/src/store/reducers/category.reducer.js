import { CATEGORIES } from "../../data/categories";
import { SELECT_CATEGORY } from "../actions/category.action";

const initialState = {
    categories: CATEGORIES,
    selected: null
}

const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_CATEGORY:
            const indexCtegory = state.categories.findIndex(category => category.id === action.categoryId)
            if (indexCtegory === -1) return state
            return {
                ...state, selected: state.categories[indexCtegory]
            }
        default:
            return state
    }
}

export default CategoryReducer