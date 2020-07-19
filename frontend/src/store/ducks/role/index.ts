import { createActions, createReducer } from 'reduxsauce';
import produce from 'immer';
import { IRoleObg } from '../../../interfaces';

/**
 * Creating action types e creators
 */

export const { Types, Creators } = createActions({
  //get roles
  getRolesRequest: [],
  getRolesSuccess: ['roles'],
  getRolesFailure: [],

  //add
  addRoleRequest: ['role'],
  addRoleSuccess: ['role'],
  addRoleFailure: [],

  //update
  updateRoleRequest: ['role', 'id'],
  updateRoleSuccess: ['role'],
  updateRoleFailure: [],

  //delete
  deleteRoleRequest: ['id'],
  deleteRoleSuccess: ['id'],
  deleteRoleFailure: [],
});

/**
 * Creating the reducer handlers
 */
const INITIAL_STATE: IRoleObg = {
  roles: [],
  loading: false,
};

// get roles
const getRolesRequest = (state = INITIAL_STATE): IRoleObg =>
  produce(state, draft => {
    draft.loading = true;
  });

const getRolesSuccess = (state = INITIAL_STATE, action: any): IRoleObg =>
  produce(state, draft => {
    draft.loading = false;
    draft.roles = action.roles;
  });

const getRolesFailure = (state = INITIAL_STATE): IRoleObg =>
  produce(state, draft => {
    draft.loading = false;
  });

// add roles
const addRoleRequest = (state = INITIAL_STATE): IRoleObg =>
  produce(state, draft => {
    draft.loading = true;
  });

const addRoleSuccess = (state = INITIAL_STATE, action: any): IRoleObg =>
  produce(state, draft => {
    draft.loading = false;
    draft.roles = draft.roles.concat(action.role);
  });

const addRoleFailure = (state = INITIAL_STATE): IRoleObg =>
  produce(state, draft => {
    draft.loading = false;
  });

// update roles
const updateRoleRequest = (state = INITIAL_STATE): IRoleObg =>
  produce(state, draft => {
    draft.loading = true;
  });

const updateRoleSuccess = (state = INITIAL_STATE, action: any): IRoleObg =>
  produce(state, draft => {
    draft.loading = false;
    draft.roles = draft.roles.filter(
      (role: any) => role._id !== action.role._id,
    );
    draft.roles = draft.roles.concat(action.role);
  });

const updateRoleFailure = (state = INITIAL_STATE): IRoleObg =>
  produce(state, draft => {
    draft.loading = false;
  });

// delete roles
const deleteRoleRequest = (state = INITIAL_STATE): IRoleObg =>
  produce(state, draft => {
    draft.loading = true;
  });

const deleteRoleSuccess = (state = INITIAL_STATE, action: any): IRoleObg =>
  produce(state, draft => {
    draft.loading = false;
    draft.roles = draft.roles.filter(emp => emp._id !== action.id);
  });

const deleteRoleFailure = (state = INITIAL_STATE): IRoleObg =>
  produce(state, draft => {
    draft.loading = false;
  });

/**
 * Creating reducer
 */
export default createReducer(INITIAL_STATE, {
  //get
  [Types.GET_ROLES_REQUEST]: getRolesRequest,
  [Types.GET_ROLES_SUCCESS]: getRolesSuccess,
  [Types.GET_ROLES_FAILURE]: getRolesFailure,

  //add
  [Types.ADD_ROLE_REQUEST]: addRoleRequest,
  [Types.ADD_ROLE_SUCCESS]: addRoleSuccess,
  [Types.ADD_ROLE_FAILURE]: addRoleFailure,

  //update
  [Types.UPDATE_ROLE_REQUEST]: updateRoleRequest,
  [Types.UPDATE_ROLE_SUCCESS]: updateRoleSuccess,
  [Types.UPDATE_ROLE_FAILURE]: updateRoleFailure,

  //delete
  [Types.DELETE_ROLE_REQUEST]: deleteRoleRequest,
  [Types.DELETE_ROLE_SUCCESS]: deleteRoleSuccess,
  [Types.DELETE_ROLE_FAILURE]: deleteRoleFailure,
});
