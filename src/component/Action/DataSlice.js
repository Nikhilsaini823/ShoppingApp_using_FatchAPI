import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
    name: "dataaction",
    initialState: {
        userData: [],
    },
    reducers: {
        saveUser: (state, action) => {
            return {
                ...state,
                userData: [...state.userData, action.payload]
            }
        },
        removeList: (state, action) => {
            return {
                
            }
        }
    }
});
export const { saveUser, removeList } = DataSlice.actions
export default DataSlice.reducer;