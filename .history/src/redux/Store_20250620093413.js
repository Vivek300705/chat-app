import { configureStore } from "@reduxjs/toolkit";
import {useDispatch as useAppDispatch,useSelector as useAppSelector} from "react-redux";
import { persistStore,persistReducer } from "redux-persist";


const store=configureStore({
    reducer:persistReducer(),
    middileware:(getDefaultMiddleware)=> getDefaultMiddleware({
        serializeableCheck:false,
        immutableCheck:false,
    }),
});



const persister