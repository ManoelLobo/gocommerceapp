import React from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import CategoriesActions from 'store/ducks/categories';

import CategoryBar from 'pages/Main/components/CategoryBar';

const mockStore = configureStore({});

const initialState = {
  categories: {
    data: [{ id: 1, title: 'Roupa' }, { id: 2, title: 'Calçado' }],
    loading: false,
    active: 1,
  },
};

const loadingState = {
  categories: {
    ...initialState.categories,
    loading: true,
  },
};

describe('Testing CategoryBar', () => {
  const defaultStore = mockStore(initialState);
  const createWrapper = (store = defaultStore) => shallow(<CategoryBar />, { context: { store } });
  const createLoadingWrapper = () => createWrapper(mockStore(loadingState));

  it('renders loaded as expected', () => {
    const wrapper = createWrapper();

    expect(wrapper.prop('categories')).toEqual(initialState.categories.data);
    expect(wrapper
      .dive()
      .find(ScrollView)
      .exists()).toBe(true);

    expect(wrapper
      .dive()
      .find(ActivityIndicator)
      .exists()).toBe(false);
  });

  it('renders loading as expected', () => {
    const wrapper = createLoadingWrapper();

    expect(wrapper.prop('categories')).toEqual(loadingState.categories.data);
    expect(wrapper
      .dive()
      .find(ScrollView)
      .exists()).toBe(false);
    expect(wrapper
      .dive()
      .find(ActivityIndicator)
      .exists()).toBe(true);
  });

  it('can select a category', () => {
    const wrapper = createWrapper();

    wrapper
      .dive()
      .find(ScrollView)
      .childAt(0)
      .simulate('press');

    expect(defaultStore.getActions()).toContainEqual(CategoriesActions.categoriesSetActive(initialState.categories.data[0].id));
  });
});
