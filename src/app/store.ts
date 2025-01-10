import { combineSlices, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Reducers/counterReducer";
import authReducer from "../Reducers/authReducer";

const rootReducers = combineSlices(counterReducer, authReducer);

const store = configureStore({
  reducer: rootReducers,
});

// Type of the root state (all of your state combined)
export type RootState = ReturnType<typeof store.getState>;

export type AppStore = typeof store;
// Custom dispatch type based on the store's dispatch
export type AppDispatch = AppStore["dispatch"];

//The types above are not specific to Redux. They are just custom types.

export default store;
