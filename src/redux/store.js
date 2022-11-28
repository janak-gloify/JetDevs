// Redux Imports
import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import logger from 'redux-logger'
import thunk from 'redux-thunk';

// Local File Imports
import rootReducer from './reducers';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel1,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


let store = createStore(persistedReducer, applyMiddleware(thunk, logger))
let persistor = persistStore(store)
export { store, persistor };