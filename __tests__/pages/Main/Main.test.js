import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';

import Main from 'pages/Main';
import Header from 'components/Header';
import CategoryBar from 'pages/Main/components/CategoryBar';
import ProductList from 'pages/Main/components/ProductList';

import CategoriesActions from 'store/ducks/categories';
import CategoryProductsActions from 'store/ducks/category-products';

const mockStore = configureStore({});

const initialState = {
  categories: {
    data: [],
    active: 1,
  },
  categoryProducts: { data: [] },
};
const changedState = {
  categories: {
    data: [],
    active: 2,
  },
  categoryProducts: { data: [] },
};

describe('Testing Main page', () => {
  const store = mockStore(initialState);
  const createWrapper = () => shallow(<Main />, { context: { store } });

  it('renders as expected', () => {
    const wrapper = createWrapper();

    expect(wrapper.dive().find(Header)).toHaveLength(1);
    expect(wrapper.dive().find(CategoryBar)).toHaveLength(1);
    expect(wrapper.dive().find(ProductList)).toHaveLength(1);
  });

  it.skip('requests products when category is changed', () => {
    const wrapper = createWrapper();
    const changedStore = mockStore(changedState);
    sinon.spy(CategoryProductsActions, 'categoryProductsRequest');

    wrapper.setContext({ store: changedStore });
    wrapper.setProps({ categories: { active: 2 } });

    expect(CategoryProductsActions.categoryProductsRequest.called).toBe(true);

    expect(store.getActions()).toContainEqual();
  });

  it.skip('data to be loaded on mount', () => {
    const wrapper = createWrapper();
  });
});
