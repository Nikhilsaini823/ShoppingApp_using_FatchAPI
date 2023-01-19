import { combineReducers, configureStore } from '@reduxjs/toolkit'
import DataAction from '../Action/DataSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk";


const persistConfig = {
    key: 'root',
    storage,
}
const rootReducer = combineReducers({
    dataaction: DataAction,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: {
        dataaction: persistedReducer
    },
    middleware: [thunk],
});

const persistor = persistStore(store);

export default { store, persistor };