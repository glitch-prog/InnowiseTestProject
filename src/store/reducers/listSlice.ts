import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';

interface ListState {
  value: number;
}

const initialState: ListState = {
  value: 0,
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const {increment, decrement, incrementByAmount} = listSlice.actions;

export const selectCount = (state: RootState) => state.list.value;

export default listSlice.reducer;
