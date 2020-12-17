import { configureStore, Store } from '@reduxjs/toolkit';
import { counterReducer } from './components/Counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

type GetStoreState<S> = S extends Store<infer State, any> ? State : unknown;
export type StoreState = GetStoreState<typeof store>;
