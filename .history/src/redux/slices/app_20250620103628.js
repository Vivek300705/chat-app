import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../Store";

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
        updateSideBarType(state,action){
            state.Sidebar.type=action.payload.type;
        },
    },
});
export default slice.reducer;

//
export function toggleSideBar(){
return async()=>{
    
}
}
export function updateSideBarType(){

}
