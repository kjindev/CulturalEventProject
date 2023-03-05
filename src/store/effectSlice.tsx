import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StateType {
  modalState: boolean;
  fadeinState: boolean;
}

const initialState: StateType = {
  modalState: false,
  fadeinState: false,
};

const effectSlice = createSlice({
  name: "effect",
  initialState,
  reducers: {
    modalVisible: (state: StateType, action: PayloadAction<boolean>) => {
      state.modalState = action.payload;
    },
    fadeinEffect: (state: StateType, action: PayloadAction<boolean>) => {
      state.fadeinState = action.payload;
    },
  },
});

export default effectSlice;
export const { modalVisible, fadeinEffect } = effectSlice.actions;
