import {applyMiddleware, combineReducers, createStore} from 'redux';

import CategoryReducer from './reducers/category.reducer';
import ListReducer from './reducers/list.reducer';
import ProductReducer from './reducers/products.reducer';
import listsReducer from './reducers/lists.reducer';
import thunk from 'redux-thunk';

const RootReducer = combineReducers({
    categories: CategoryReducer,
    products: ProductReducer,
    list: ListReducer,
    lists: listsReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk));