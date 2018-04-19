import React from 'react';
import { Image, Text } from 'react-native';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { NavigationActions } from 'react-navigation';

import ProductCard from 'pages/Main/components/ProductList/components/ProductCard';

const mockStore = configureStore({});

const initialState = {};

const props = {
  product: {
    image: 'imguri',
    name: 'Camisa',
    brand: 'Marca',
    price: 9.99,
  },
  dispatch: () => {},
};

describe('Testing ProductCard', () => {
  const store = mockStore(initialState);
  const createWrapper = () => shallow(<ProductCard {...props} />, { context: { store } });

  it('renders as expected', () => {
    const wrapper = createWrapper();

    expect(wrapper.dive().find(Image)).toHaveLength(1);
    expect(wrapper.dive().find(Text)).toHaveLength(3);
    expect(wrapper
      .dive()
      .childAt(2)
      .contains(props.product.name));
  });

  it('can navigate to product', () => {
    const wrapper = createWrapper();

    wrapper.dive().simulate('press');

    expect(store.getActions()).toContainEqual(NavigationActions.navigate({ routeName: 'Detail', params: { product: props.product } }));
  });
});
