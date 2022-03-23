import { createSlice } from "@reduxjs/toolkit";
const initialValue = {
    isLoggedIn: false,
    userInfo : {}
}

export const userslice = createSlice({
    name: "user",
    initialState : {
        value: initialValue 
    },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        logout: (state, action) => {
            state.value = initialValue;
        }
    }
})

export const { login, logout} = userslice.actions;
export default userslice.reducer;