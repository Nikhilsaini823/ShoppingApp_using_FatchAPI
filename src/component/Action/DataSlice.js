import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
    name: "dataaction",
    initialState: {
        userData: [],
        currentUsers: {}
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
            // console.log('data', action.payload)
            return {
                ...state,
                userData: [...state.userData.filter((item) => item.email !== action.payload)]
            }
        },
        editData: (state, action) => {
            // state.currentUsers = action.payload
            // console.log("value",action.payload )

            var user = [...state.userData]

            user.map(function (item) {
                if (item.email === action.payload) {
                    state.currentUsers = item;
                }
            })


            // state.currentUsers = user[0];
        },
        updateData: (state, action) => {
            state.userData = action.payload;
        }
    }

});
export const { saveUser, deleteData, editData, updateData } = DataSlice.actions
export default DataSlice.reducer;