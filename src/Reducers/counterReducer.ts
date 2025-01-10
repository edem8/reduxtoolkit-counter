import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//create a reducer and add to the store
//creating a reducer with slice defines the name of the reducer, the action & asscoiated state modification

//PayloadAction - so we can add a payload if we want

interface counter {
  count: number;
}

const initialState: counter = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    decrement: (state) => {
      state.count--;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice;
