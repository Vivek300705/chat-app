import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage';
import appReducer form "./"


// slices





const rootPersistConfig={
    key:'root',
    storage,
    keyPrefix:'redux-'
    // 
}

const rootReducer=combineReducers({
    app:appReducer,
})

export {rootPersistConfig,rootReducer}