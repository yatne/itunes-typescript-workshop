import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreState } from '../../store';

type CounterState = {
  count: number;
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  } as CounterState,
  reducers: {
    incCount(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
    decCount(state, action: PayloadAction<number>) {
      state.count -= action.payload;
    },
  },
});

export const { incCount, decCount } = counterSlice.actions;
export const selectCount = (state: StoreState) => state.counter.count;

export const counterReducer = counterSlice.reducer;
