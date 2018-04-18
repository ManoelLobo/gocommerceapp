import React from 'react';
import { ScrollView } from 'react-native';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import CategoryBar from 'pages/Main/components/CategoryBar';

const mockStore = configureStore({});

const initialState = {
  categories: {
    data: [{ id: 1, title: 'Roupa' }],
    loading: false,
    active: 1,
  },
};

describe('Testing CategoryBar', () => {
  const store = mockStore(initialState);

  const createWrapper = () => shallow(<CategoryBar />, { context: { store } });

  it('renders as expected', () => {
    const wrapper = createWrapper();
    expect(wrapper.prop('categories')).toEqual(initialState.categories.data);
    expect(wrapper
      .dive()
      .find(ScrollView)
      .exists()).toBe(true);
  });
});
