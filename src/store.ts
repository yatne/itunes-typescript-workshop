import { configureStore, Store } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { counterSaga } from './components/Counter/counterSaga';
import { counterReducer } from './components/Counter/counterSlice';
import { itunesSaga } from './components/ITunes/iTunesSaga';
import { iTunesReducer } from './components/ITunes/iTunesSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    itunes: iTunesReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(function* () {
  yield all([counterSaga(), itunesSaga()]);
});

type GetStoreState<S> = S extends Store<infer State, any> ? State : unknown;

export type StoreState = GetStoreState<typeof store>;
