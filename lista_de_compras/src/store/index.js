import { applyMiddleware, combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist' // Redux Persist

import AsyncStorage from '@react-native-async-storage/async-storage'; // Redux Persist
import CategoryReducer from './reducers/category.reducer';
import ListReducer from './reducers/list.reducer';
import ProductReducer from './reducers/products.reducer';
import listsReducer from './reducers/lists.reducer';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const RootReducer = combineReducers({
    categories: CategoryReducer,
    products: ProductReducer,
    list: ListReducer,
    lists: listsReducer,
})

const persistedReducer = persistReducer(persistConfig, RootReducer) // Redux Persist

export const store = createStore(persistedReducer, applyMiddleware(thunk)); // Redux Persist
export const storePersisted = persistStore(store); // Redux Persist
