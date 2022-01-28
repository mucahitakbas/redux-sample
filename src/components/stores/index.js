import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import mainReducer from "./main";
export default configureStore({
  reducer: {
    counter: counterReducer,
    main: mainReducer,
  },
});
