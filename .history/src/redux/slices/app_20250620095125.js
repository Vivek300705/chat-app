import { createSlice } from "@reduxjs/toolkit";
 
//
import { dispatch } from "../Store";
import { Sidebar } from "phosphor-react";
import { type } from "@testing-library/user-event/dist/type";
const initialState={
    Sidebar:{
        open:false,
        type:"CONTACT"
    }

}
const slice = createSlice({
    name:'app',
    initialState,
    reducers:{
        //togg;e sidebar
        toggleSideBar(state,action){
            state.Sidebar.open=!state.Sidebar.open
        },
        updateSideBarType(st)
    }
})