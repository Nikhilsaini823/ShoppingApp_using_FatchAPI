import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
    name: "dataaction",
    initialState: {
        userData: [],
        // currentUser: {}
    },
    reducers: {
        saveUser: (state, action) => {
            console.log("saveuser", action.payload)
            return {
                ...state,
                userData: [...state.userData, action.payload]
            }
        },
        deleteData: (state, action) => {
            console.log('data',action.payload)
            return{
                ...state,
                userData : [...state.userData.filter((item) => item.id !== action.payload)]
            }
        },
        // editData : (state, action) => {
        //     console.log("currentuser",action.payload)
        //     return {
        //         ...state,
        //         currentUser :  [...state.currentUser, action.payload]
        //       };
        // }
    }
});
export const { saveUser, deleteData } = DataSlice.actions
export default DataSlice.reducer;