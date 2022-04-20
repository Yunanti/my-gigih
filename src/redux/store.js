import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./reducer";

export default configureStore({
  reducer: {
    search: searchReducer,
  },
});
