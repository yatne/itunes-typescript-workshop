import { select, takeLatest } from 'redux-saga/effects';
import { incCount } from './counterSlice';
async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function* onIncCount() {
  console.log('loglog');
  yield wait(1000);
  console.log('state', (yield select()).counter);
}

export function* counterSaga() {
  yield takeLatest(incCount.type, onIncCount);
}
