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
    const response = yield call(api.post, '/employees', employee);
    console.log(response);
    yield put(addUserSuccess(response.data));
  } catch (error) {
    yield put(addUserFailure());
  }
}

export function* updateUser({ employee, id }) {
  const { updateUserSuccess, updateUserFailure } = UsersActions;
  try {
    const response = yield call(api.put, `/employees/${id}`, employee);
    console.log(response.data);
    yield put(updateUserSuccess(response.data));
  } catch (error) {
    yield put(updateUserFailure());
  }
}

export function* deleteUser({ id }) {
  const { deleteUserSuccess, deleteUserFailure } = UsersActions;
  try {
    yield call(api.delete, `/employees/${id}`);
    console.log(id);
    yield put(deleteUserSuccess(id));
  } catch (error) {
    yield put(deleteUserFailure());
  }
}

export default all([
  takeLatest(Types.GET_USERS_REQUEST, getUsers),
  takeLatest(Types.ADD_USER_REQUEST, addUser),
  takeLatest(Types.UPDATE_USER_REQUEST, updateUser),
  takeLatest(Types.DELETE_USER_REQUEST, deleteUser),
]);
