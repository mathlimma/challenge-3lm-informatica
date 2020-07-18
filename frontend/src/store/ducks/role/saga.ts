import { all, put, call, takeLatest } from 'redux-saga/effects';
import { Creators as RolesActions, Types } from '.';
import api from '../../../services/api';

export function* getRoles() {
  const { getRolesSuccess, getRolesFailure } = RolesActions;
  try {
    const response = yield call(api.get, '/roles');
    yield put(getRolesSuccess(response.data));
  } catch (error) {
    yield put(getRolesFailure());
  }
}

export function* addRole({ role }: any) {
  const { addRoleSuccess, addRoleFailure } = RolesActions;
  try {
    console.log(role);
    const response = yield call(api.post, '/roles', role);
    yield put(addRoleSuccess(response.data));
  } catch (error) {
    yield put(addRoleFailure());
  }
}

export function* updateRole({ role, id }: any) {
  const { updateRoleSuccess, updateRoleFailure } = RolesActions;
  try {
    const response = yield call(api.put, `/roles/${id}`, role);
    yield put(updateRoleSuccess(response.data));
  } catch (error) {
    yield put(updateRoleFailure());
  }
}

export function* deleteRole({ id }: any) {
  const { deleteRoleSuccess, deleteRoleFailure } = RolesActions;
  try {
    yield call(api.delete, `/roles/${id}`);
    yield put(deleteRoleSuccess(id));
  } catch (error) {
    yield put(deleteRoleFailure());
  }
}

export default all([
  takeLatest(Types.GET_ROLES_REQUEST, getRoles),
  takeLatest(Types.ADD_ROLE_REQUEST, addRole),
  takeLatest(Types.UPDATE_ROLE_REQUEST, updateRole),
  takeLatest(Types.DELETE_ROLE_REQUEST, deleteRole),
]);
