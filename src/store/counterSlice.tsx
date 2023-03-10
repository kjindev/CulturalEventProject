import { createSlice } from "@reduxjs/toolkit";

interface StateType {
  musicalCnt: number;
  movieCnt: number;
  classicCnt: number;
  educationCnt: number;
  concertCnt: number;
}

const initialState: StateType = {
  musicalCnt: 0,
  movieCnt: 0,
  classicCnt: 0,
  educationCnt: 0,
  concertCnt: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    musicalCntUpdate: (state: StateType) => {
      state.musicalCnt = state.musicalCnt + 1;
    },
    movieCntUpdate: (state: StateType) => {
      state.movieCnt = state.movieCnt + 1;
    },
    classicCntUpdate: (state: StateType) => {
      state.classicCnt = state.classicCnt + 1;
    },
    educationCntUpdate: (state: StateType) => {
      state.educationCnt = state.educationCnt + 1;
    },
    concertCntUpdate: (state: StateType) => {
      state.concertCnt = state.concertCnt + 1;
    },
  },
});

export default counterSlice;
export const {
  musicalCntUpdate,
  movieCntUpdate,
  classicCntUpdate,
  educationCntUpdate,
  concertCntUpdate,
} = counterSlice.actions;

/* musicalCnt 뮤지컬,오페라,독주,독창회,연극
  movieCnt 영화
  classicCnt 클래식, 국악, 무용
  educationCnt 교육, 체험, 전시, 미술
  concertCnt 콘서트, 축제 */
