import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataType {
  CODENAME: string;
  GUNAME: string;
  MAIN_IMG: string;
  TITLE: string;
}

interface StateType {
  musicalData: DataType[];
  movieData: DataType[];
  classicData: DataType[];
  educationData: DataType[];
  concertData: DataType[];
  recommendData: {
    CODENAME: string;
    GUNAME: string;
    MAIN_IMG: string;
    TITLE: string;
  };
}

const initialState: StateType = {
  musicalData: [],
  movieData: [],
  classicData: [],
  educationData: [],
  concertData: [],
  recommendData: { CODENAME: "", GUNAME: "", MAIN_IMG: "", TITLE: "" },
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    musicalDataUpdate: (
      state: StateType,
      action: PayloadAction<DataType[]>
    ) => {
      state.musicalData = action.payload;
    },
    movieDataUpdate: (state: StateType, action: PayloadAction<DataType[]>) => {
      state.movieData = action.payload;
    },
    classicDataUpdate: (
      state: StateType,
      action: PayloadAction<DataType[]>
    ) => {
      state.classicData = action.payload;
    },
    educationDataUpdate: (
      state: StateType,
      action: PayloadAction<DataType[]>
    ) => {
      state.educationData = action.payload;
    },
    concertDataUpdate: (
      state: StateType,
      action: PayloadAction<DataType[]>
    ) => {
      state.concertData = action.payload;
    },
    recommendDataUpdate: (
      state: StateType,
      action: PayloadAction<{
        CODENAME: string;
        GUNAME: string;
        MAIN_IMG: string;
        TITLE: string;
      }>
    ) => {
      state.recommendData = action.payload;
    },
  },
});

export default dataSlice;
export const {
  musicalDataUpdate,
  movieDataUpdate,
  classicDataUpdate,
  educationDataUpdate,
  concertDataUpdate,
  recommendDataUpdate,
} = dataSlice.actions;
