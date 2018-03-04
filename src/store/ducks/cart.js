import { createActions, createReducer } from 'reduxsauce';

// Types & Creators
const { Types, Creators } = createActions({
  cartAddProduct: ['product'],
  cartRemoveProduct: ['productId'],
  cartChangeQuantity: ['productId', 'quantity'],
});

export { Types };
export default Creators;

// Reducer
const INITIAL_STATE = {};

export const addProduct = (state, action) => {
  const cart = { ...state };
  const { product } = action;
  if (!cart[product.id]) {
    cart[product.id] = {
      quantity: 1,
      product,
    };
  }

  return cart;
};

export const removeProduct = (state, action) => {
  const cart = { ...state };
  delete cart[action.productId];

  return cart;
};

export const changeProductQuantity = (state, action) => {
  const cart = { ...state };
  cart[action.productId].quantity = action.quantity;

  return cart;
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CART_ADD_PRODUCT]: addProduct,
  [Types.CART_REMOVE_PRODUCT]: removeProduct,
  [Types.CART_CHANGE_QUANTITY]: changeProductQuantity,
});
