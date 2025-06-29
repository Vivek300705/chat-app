import { configureStore } from "@reduxjs/toolkit";
import {useDispatch as useAppDispatch,useSelector as useAppSelector} from "react-redux";
import { persistStore,persistReducer } from "redux-persist";
import { rootPersistConfig,rootReducer } from "./rootReducer";

const store=configureStore({
    reducer:persistReducer(root),
    middileware:(getDefaultMiddleware)=> getDefaultMiddleware({
        serializeableCheck:false,
        immutableCheck:false,
    }),
});



const persister=persistStore(store);
const {dispatch}=store;
const useSelector=useAppSelector;
const useDispatch =()=> useAppDispatch();
export {store,persister,dispatch,useSelector,useDispatch}