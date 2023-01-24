import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
    name: "dataaction",
    initialState: {
        userData: [],
        currentUser: {}
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
            console.log('data', action.payload)
            return {
                ...state,
                userData: [...state.userData.filter((item) => item.id !== action.payload)]
            }
        },
        editData: (state, action) => {
            console.log("currentuser", action.payload)
            return {
                ...state,
                userData: {
                    [action.id]: {
                        currentUser: { $set: action.payload }
                    }
                }
            }
        }
    }
});
export const { saveUser, deleteData, editData } = DataSlice.actions
export default DataSlice.reducer;