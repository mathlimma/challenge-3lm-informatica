import { createActions, createReducer } from 'reduxsauce';
import produce from 'immer';

/**
 * Creating action types & creators
 */

export const { Types, Creators } = createActions({
  //get users
  getUsersRequest: [],
  getUsersSuccess: ['users'],
  getUsersFailure: [],

  //add
  addUserRequest: ['employee'],
  addUserSuccess: ['employee'],
  addUserFailure: [],

  //update
  updateUserRequest: ['employee', 'id'],
  updateUserSuccess: ['employee'],
  updateUserFailure: [],

  //delete
  deleteUserRequest: ['id'],
  deleteUserSuccess: ['id'],
  deleteUserFailure: [],
});

/**
 * Creating the reducer handlers
 */
const INITIAL_STATE = {
  users: [],
  loading: false,
};

// get user
const getUsersRequest = (state = INITIAL_STATE) =>
  produce(state, draft => {
    draft.loading = true;
  });

const getUsersSuccess = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    draft.loading = false;
    draft.users = action.users;
  });

const getUsersFailure = (state = INITIAL_STATE) =>
  produce(state, draft => {
    draft.loading = false;
  });

// add user
const addUserRequest = (state = INITIAL_STATE) =>
  produce(state, draft => {
    draft.loading = true;
  });

const addUserSuccess = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    draft.loading = false;
    draft.users = draft.users.concat(action.employee);
  });

const addUserFailure = (state = INITIAL_STATE) =>
  produce(state, draft => {
    draft.loading = false;
  });

// update user
const updateUserRequest = (state = INITIAL_STATE) =>
  produce(state, draft => {
    draft.loading = true;
  });

const updateUserSuccess = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    draft.loading = false;
    draft.users = draft.users.filter(user => user.id != action.employee.id);
    draft.users = draft.users.concat(action.employee);
  });

const updateUserFailure = (state = INITIAL_STATE) =>
  produce(state, draft => {
    draft.loading = false;
  });

// delete user
const deleteUserRequest = (state = INITIAL_STATE) =>
  produce(state, draft => {
    draft.loading = true;
  });

const deleteUserSuccess = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    draft.loading = false;
    draft.users = draft.users.filter(user => user.id != action.id);
  });

const deleteUserFailure = (state = INITIAL_STATE) =>
  produce(state, draft => {
    draft.loading = false;
  });

/**
 * Creating reducer
 */
export default createReducer(INITIAL_STATE, {
  //get
  [Types.GET_USERS_REQUEST]: getUsersRequest,
  [Types.GET_USERS_SUCCESS]: getUsersSuccess,
  [Types.GET_USERS_FAILURE]: getUsersFailure,

  //add
  [Types.ADD_USER_REQUEST]: addUserRequest,
  [Types.ADD_USER_SUCCESS]: addUserSuccess,
  [Types.ADD_USER_FAILURE]: addUserFailure,

  //update
  [Types.UPDATE_USER_REQUEST]: updateUserRequest,
  [Types.UPDATE_USER_SUCCESS]: updateUserSuccess,
  [Types.UPDATE_USER_FAILURE]: updateUserFailure,

  //delete
  [Types.DELETE_USER_REQUEST]: deleteUserRequest,
  [Types.DELETE_USER_SUCCESS]: deleteUserSuccess,
  [Types.DELETE_USER_FAILURE]: deleteUserFailure,
});
