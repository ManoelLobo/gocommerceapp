import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { NavigationActions } from 'react-navigation';

import Header from 'components/Header';

const mockStore = configureStore([]);

const initialState = {};

const props = {
  title: '',
  dispatch: () => {},
  backEnabled: true,
};

describe('Testing Header component', () => {
  const store = mockStore(initialState);

  const createWrapper = () => shallow(<Header {...props} />, { context: { store } });

  it('renders as expected', () => {
    const wrapper = createWrapper();

    expect(wrapper
      .dive()
      .find(Text)
      .exists()).toBe(true);

    expect(wrapper
      .dive()
      .find(TouchableOpacity)
      .exists()).toBe(true);

    wrapper.setProps({ backEnabled: false });

    expect(wrapper
      .dive()
      .find(TouchableOpacity)
      .exists()).toBe(false);
  });

  it('can navigate back', () => {
    const wrapper = createWrapper();

    wrapper
      .dive()
      .find(TouchableOpacity)
      .simulate('press');

    expect(store.getActions()).toContainEqual(NavigationActions.back());
  });
});
