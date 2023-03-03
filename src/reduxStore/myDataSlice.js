import { createSlice } from "@reduxjs/toolkit";

export const myDataSlice = createSlice({
    name: "myData",
    initialState: {
        username: "",
        email: ""
    },
    reducers: {
        changeUsername: (state, action) => {
            state.username = action.payload;
        },
        changeEmail: (state, action) => {
            state.email = action.payload;
        }
    }
});

export const { changeUsername, changeEmail } = myDataSlice.actions;

export const CurrentUsername = (state) => state.myData.username;
export const CurrentEmail = (state) => state.myData.email;

export default myDataSlice.reducer;
