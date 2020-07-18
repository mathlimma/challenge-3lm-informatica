import { createActions, createReducer } from 'reduxsauce';
import produce from 'immer';
import { IEmployeesObg } from '../../../interfaces';

/**
 * Creating action types e creators
 */

export const { Types, Creators } = createActions({
  //get employees
  getEmployeesRequest: [],
  getEmployeesSuccess: ['employees'],
  getEmployeesFailure: [],

  //add
  addEmployeeRequest: ['employee'],
  addEmployeeSuccess: ['employee'],
  addEmployeeFailure: [],

  //update
  updateEmployeeRequest: ['employee', 'id'],
  updateEmployeeSuccess: ['employee'],
  updateEmployeeFailure: [],

  //delete
  deleteEmployeeRequest: ['id'],
  deleteEmployeeSuccess: ['id'],
  deleteEmployeeFailure: [],
});

/**
 * Creating the reducer handlers
 */
const INITIAL_STATE: IEmployeesObg = {
  employees: [],
  loading: false,
};

// get employees
const getEmployeesRequest = (state = INITIAL_STATE): IEmployeesObg =>
  produce(state, draft => {
    draft.loading = true;
  });

const getEmployeesSuccess = (
  state = INITIAL_STATE,
  action: any,
): IEmployeesObg =>
  produce(state, draft => {
    draft.loading = false;
    draft.employees = action.employees;
  });

const getEmployeesFailure = (state = INITIAL_STATE): IEmployeesObg =>
  produce(state, draft => {
    draft.loading = false;
  });

// add employee
const addEmployeeRequest = (state = INITIAL_STATE): IEmployeesObg =>
  produce(state, draft => {
    draft.loading = true;
  });

const addEmployeeSuccess = (
  state = INITIAL_STATE,
  action: any,
): IEmployeesObg =>
  produce(state, draft => {
    draft.loading = false;
    draft.employees = draft.employees.concat(action.employee);
  });

const addEmployeeFailure = (state = INITIAL_STATE): IEmployeesObg =>
  produce(state, draft => {
    draft.loading = false;
  });

// update employee
const updateEmployeeRequest = (state = INITIAL_STATE): IEmployeesObg =>
  produce(state, draft => {
    draft.loading = true;
  });

const updateEmployeeSuccess = (
  state = INITIAL_STATE,
  action: any,
): IEmployeesObg =>
  produce(state, draft => {
    draft.loading = false;
    draft.employees = draft.employees.filter(
      emp => emp._id !== action.employee._id,
    );
    draft.employees = draft.employees.concat(action.employee);
  });

const updateEmployeeFailure = (state = INITIAL_STATE): IEmployeesObg =>
  produce(state, draft => {
    draft.loading = false;
  });

// delete employee
const deleteEmployeeRequest = (state = INITIAL_STATE): IEmployeesObg =>
  produce(state, draft => {
    draft.loading = true;
  });

const deleteEmployeeSuccess = (
  state = INITIAL_STATE,
  action: any,
): IEmployeesObg =>
  produce(state, draft => {
    draft.loading = false;
    draft.employees = draft.employees.filter(emp => emp._id !== action.id);
  });

const deleteEmployeeFailure = (state = INITIAL_STATE): IEmployeesObg =>
  produce(state, draft => {
    draft.loading = false;
  });

/**
 * Creating reducer
 */
export default createReducer(INITIAL_STATE, {
  //get
  [Types.GET_EMPLOYEES_REQUEST]: getEmployeesRequest,
  [Types.GET_EMPLOYEES_SUCCESS]: getEmployeesSuccess,
  [Types.GET_EMPLOYEES_FAILURE]: getEmployeesFailure,

  //add
  [Types.ADD_EMPLOYEE_REQUEST]: addEmployeeRequest,
  [Types.ADD_EMPLOYEE_SUCCESS]: addEmployeeSuccess,
  [Types.ADD_EMPLOYEE_FAILURE]: addEmployeeFailure,

  //update
  [Types.UPDATE_EMPLOYEE_REQUEST]: updateEmployeeRequest,
  [Types.UPDATE_EMPLOYEE_SUCCESS]: updateEmployeeSuccess,
  [Types.UPDATE_EMPLOYEE_FAILURE]: updateEmployeeFailure,

  //delete
  [Types.DELETE_EMPLOYEE_REQUEST]: deleteEmployeeRequest,
  [Types.DELETE_EMPLOYEE_SUCCESS]: deleteEmployeeSuccess,
  [Types.DELETE_EMPLOYEE_FAILURE]: deleteEmployeeFailure,
});
