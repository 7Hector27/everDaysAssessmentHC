import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface FuneralDataState {
  funeralData: [];
}

const initialState: FuneralDataState = {
  funeralData: [],
};

export const funeralSlice = createSlice({
  name: 'funeralData',
  initialState,
  reducers: {
    setFuneralData: (state, action: PayloadAction<[]>) => {
      state.funeralData = action.payload;
    },
  },
});

export const { setFuneralData } = funeralSlice.actions;

export default funeralSlice.reducer;
