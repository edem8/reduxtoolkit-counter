import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { configureStore } from "@reduxjs/toolkit";

interface Action {
  type: string;
}

//ACTIONS
const increment = () => {
  return {
    type: "INCREMENT",
  };
};
const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

//REDUCER

const counterReducer = (state: number = 0, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};

//STORE
let store = configureStore({
  reducer:{
    counter: counterReducer
  }
});

store.subscribe(() => console.log(store.getState()));
store.dispatch(increment());

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
