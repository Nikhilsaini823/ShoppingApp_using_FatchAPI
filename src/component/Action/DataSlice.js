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
                userData: [action.payload, ...state.userData]
            }
        }
    }
});
export const { saveUser } = DataSlice.actions
export default DataSlice.reducer;