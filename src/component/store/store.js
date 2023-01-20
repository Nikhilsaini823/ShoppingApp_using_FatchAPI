import { combineReducers, configureStore } from '@reduxjs/toolkit'
import DataReducer from '../Action/DataSlice'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage'               

const persistConfig = {
    key: 'root',
    storage,
}
const rootReducer = combineReducers({
    dataaction: DataReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});

const persistor = persistStore(store);

export { store, persistor };