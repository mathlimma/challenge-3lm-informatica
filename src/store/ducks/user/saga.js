import { all, put, call, takeLatest } from 'redux-saga/effects';
import { Creators as UsersActions, Types } from '.';
import api from '../../../services/api';

export function* getUsers() {
  const { getUsersSuccess, getUsersFailure } = UsersActions;
  try {
    const response = yield call(api.get, '/employees');
    yield put(getUsersSuccess(response.data));
  } catch (error) {
    yield put(getUsersFailure());
  }
}

export function* addUser({ employee }) {
  const { addUserSuccess, addUserFailure } = UsersActions;
  try {
    yield call(api.post, '/employees', employee);
    yield put(addUserSuccess());
  } catch (error) {
    yield put(addUserFailure());
  }
}

export function* updateUser({ user, id }) {
  const { addUserSuccess, addUserFailure } = UsersActions;
  try {
    yield call(api.put, `/employees/${id}`, user);
    yield put(addUserSuccess());
  } catch (error) {
    yield put(addUserFailure());
  }
}

export function* deleteUser({ user, id }) {
  const { addUserSuccess, addUserFailure } = UsersActions;
  try {
    yield call(api.delete, `/employees/${id}`, user);
    yield put(addUserSuccess());
  } catch (error) {
    yield put(addUserFailure());
  }
}

export default all([
  takeLatest(Types.GET_USERS_REQUEST, getUsers),
  takeLatest(Types.ADD_USER_REQUEST, addUser),
  takeLatest(Types.UPDATE_USER_REQUEST, updateUser),
  takeLatest(Types.DELETE_USER_REQUEST, deleteUser),
]);
