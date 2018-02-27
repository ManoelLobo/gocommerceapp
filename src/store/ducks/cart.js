import { createActions, createReducer } from 'reduxsauce';

// Types & Creators
const { Types, Creators } = createActions({
  cartAddProduct: ['productId'],
  cartRemoveProduct: ['productId'],
});

export { Types };
export default Creators;

// Reducer
const INITIAL_STATE = {};

export const addProduct = (state, action) => {
  const cart = { ...state };
  cart[action.productId] = cart[action.productId] + 1 || 1;

  return cart;
};

export const removeProduct = (state, action) => {
  const cart = { ...state };
  delete cart[action.productId];

  return cart;
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CART_ADD_PRODUCT]: addProduct,
  [Types.CART_REMOVE_PRODUCT]: removeProduct,
});
