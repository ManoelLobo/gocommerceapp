import React from 'react';
import { ActivityIndicator, FlatList, Text } from 'react-native';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import ProductList from 'pages/Main/components/ProductList';

const mockStore = configureStore({});

const initialState = {
  categoryProducts: {
    data: [
      {
        id: 1,
        name: 'Camisa',
        brand: 'Marca',
        image: 'imguri',
        price: 50,
      },
      {
        id: 2,
        name: 'Camiseta',
        brand: 'Marca',
        image: 'imguri',
        price: 45.66,
      },
    ],
    loading: false,
  },
};

const loadingState = {
  categoryProducts: {
    data: [],
    loading: true,
  },
};

const emptyState = {
  categoryProducts: {
    data: [],
    loading: false,
  },
};

describe('Testing ProductList', () => {
  const defaultStore = mockStore(initialState);
  const createWrapper = (store = defaultStore) => shallow(<ProductList />, { context: { store } });
  const createLoadingWrapper = () => createWrapper(mockStore(loadingState));
  const createEmptyWrapper = () => createWrapper(mockStore(emptyState));

  it('renders loaded as expected', () => {
    const wrapper = createWrapper();

    expect(wrapper
      .dive()
      .find(FlatList)
      .exists()).toBe(true);
    expect(wrapper
      .dive()
      .find(ActivityIndicator)
      .exists()).toBe(false);
  });

  it('renders loading as expected', () => {
    const wrapper = createLoadingWrapper();

    expect(wrapper
      .dive()
      .find(ActivityIndicator)
      .exists()).toBe(true);
    expect(wrapper
      .dive()
      .find(FlatList)
      .exists()).toBe(false);
  });

  it('renders empty as expected', () => {
    const wrapper = createEmptyWrapper();

    expect(wrapper.dive().contains(<Text>Não há produtos disponíveis nesta seção.</Text>)).toBe(true);
  });
});
