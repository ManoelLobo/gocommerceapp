import { addProduct, removeProduct, changeProductQuantity } from 'store/ducks/cart';

const products = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
const initialState = { [products[3].id]: { quantity: 1, product: products[3] } };

describe('Testing cart reducer', () => {
  it('can add a product', () => {
    const state = addProduct(initialState, { product: products[0] });

    expect(state[products[0].id].product.id).toEqual(products[0].id);
    expect(state[products[0].id].quantity).toEqual(1);
  });

  it('does not add an existing product twice', () => {
    let state = initialState;
    state = addProduct(state, { product: products[3] });

    expect(state[products[3].id].product.id).toEqual(products[3].id);
    expect(state[products[3].id].quantity).toEqual(1);
  });

  it('can remove a product', () => {
    const state = removeProduct(initialState, { productId: products[3].id });

    expect(state[products[3].id]).toBeUndefined();
  });

  it('can change a product quantity', () => {
    const state = changeProductQuantity(initialState, { productId: products[3].id, quantity: 6 });

    expect(state[products[3].id].quantity).toEqual(6);
  });
});
