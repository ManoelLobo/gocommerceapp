import { createActions, createReducer } from 'reduxsauce';

// Types & Creators
const { Types, Creators } = createActions({
  categoryProductsRequest: ['category'],
  categoryProductsSuccess: ['data'],
  categoryProductsFailure: null,
});

export { Types };
export default Creators;

// Reducer
const INITIAL_STATE = {
  data: [],
  category: null,
  loading: false,
  error: null,
};

export const request = (state, action) => ({
  ...state,
  category: action.data,
  loading: true,
});

export const success = (state, action) => ({
  ...state,
  data: action.data,
  loading: false,
  error: null,
});

export const failure = () => ({
  data: [],
  category: null,
  loading: false,
  error: true,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CATEGORY_PRODUCTS_REQUEST]: request,
  [Types.CATEGORY_PRODUCTS_SUCCESS]: success,
  [Types.CATEGORY_PRODUCTS_FAILURE]: failure,
});
