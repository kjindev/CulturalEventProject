import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import dataSlice from "./dataSlice";
import effectSlice from "./effectSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    data: dataSlice.reducer,
    effect: effectSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
