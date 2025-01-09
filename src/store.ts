import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Reducers/counterReducer";
import authReducer from "./Reducers/authReducer";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

// Type of the root state (all of your state combined)
export type RootState = ReturnType<typeof store.getState>;

// Custom dispatch type based on the store's dispatch
export type AppDispatch = typeof store.dispatch;

//The types above are not specific to Redux. They are just custom types.

export default store;
