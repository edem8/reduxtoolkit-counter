import { createSlice } from "@reduxjs/toolkit";

//create a reducer and add to the store 
//creating a reducer with slice defines the name of the reducer, the action & asscoiated state modification


interface AuthState {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "Authentication",
  initialState,
  reducers: {
    signin: (state) => {
      state.isLoggedIn = true;
    },
    signout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { signin, signout } = authSlice.actions;
export default authSlice.reducer;
