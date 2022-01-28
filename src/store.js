import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./components/stores/counter";
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
