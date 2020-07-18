import { all, put, call, takeLatest } from 'redux-saga/effects';
import { Creators as EmployeesActions, Types } from '.';
import api from '../../../services/api';

export function* getEmployees() {
  const { getEmployeesSuccess, getEmployeesFailure } = EmployeesActions;
  try {
    const response = yield call(api.get, '/employees');
    yield put(getEmployeesSuccess(response.data));
  } catch (error) {
    yield put(getEmployeesFailure());
  }
}

export function* addEmployee({ employee }: any) {
  const { addEmployeeSuccess, addEmployeeFailure } = EmployeesActions;
  try {
    const response = yield call(api.post, '/employees', employee);
    yield put(addEmployeeSuccess(response.data));
  } catch (error) {
    yield put(addEmployeeFailure());
  }
}

export function* updateEmployee({ employee, id }: any) {
  const { updateEmployeeSuccess, updateEmployeeFailure } = EmployeesActions;
  try {
    const response = yield call(api.put, `/employees/${id}`, employee);
    yield put(updateEmployeeSuccess(response.data));
  } catch (error) {
    yield put(updateEmployeeFailure());
  }
}

export function* deleteEmployee({ id }: any) {
  const { deleteEmployeeSuccess, deleteEmployeeFailure } = EmployeesActions;
  try {
    yield call(api.delete, `/employees/${id}`);
    yield put(deleteEmployeeSuccess(id));
  } catch (error) {
    yield put(deleteEmployeeFailure());
  }
}

export default all([
  takeLatest(Types.GET_EMPLOYEES_REQUEST, getEmployees),
  takeLatest(Types.ADD_EMPLOYEE_REQUEST, addEmployee),
  takeLatest(Types.UPDATE_EMPLOYEE_REQUEST, updateEmployee),
  takeLatest(Types.DELETE_EMPLOYEE_REQUEST, deleteEmployee),
]);
