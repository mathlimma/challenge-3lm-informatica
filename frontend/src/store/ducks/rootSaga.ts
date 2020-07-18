import { all } from 'redux-saga/effects';
import employee from './employee/saga';
import role from './role/saga';

export default function* rootSaga() {
  return yield all([employee, role]);
}
