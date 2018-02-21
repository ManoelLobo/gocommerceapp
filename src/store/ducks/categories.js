import { createActions, createReducer } from 'reduxsauce';

// Types & Creators
const { Types, Creators } = createActions({
  categoriesRequest: null,
  categoriesSuccess: ['data'],
  categoriesFailure: null,
  categoriesSetActive: ['id'],
});

export { Types };
export default Creators;

// Reducer
const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
  active: 0,
};

export const request = state => ({
  ...state,
  loading: true,
});

export const success = (state, action) => ({
  data: action.data,
  loading: false,
  error: null,
  active: action.data[0].id,
});

export const failure = () => ({
  data: [],
  loading: false,
  error: true,
});

export const setActive = (state, action) => ({
  ...state,
  active: action.id,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CATEGORIES_REQUEST]: request,
  [Types.CATEGORIES_SUCCESS]: success,
  [Types.CATEGORIES_FAILURE]: failure,
  [Types.CATEGORIES_SET_ACTIVE]: setActive,
});
