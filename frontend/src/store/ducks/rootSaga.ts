import { all } from 'redux-saga/effects';
import employee from './employee/saga';

export default function* rootSaga() {
  return yield all([employee]);
}
