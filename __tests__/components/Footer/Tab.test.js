import React from 'react';
import { shallow } from 'enzyme';

import { TouchableOpacity } from 'react-native';

import Tab from 'components/Footer/components/Tab';

const props = {
  icon: 'home',
  active: true,
  onPress: () => {},
};

describe('Testing active Footer Tab', () => {
  const createWrapper = () =>
    shallow(<Tab icon={props.icon} active={props.active} onPress={props.onPress} />);

  it('renders as expected', () => {
    const wrapper = createWrapper();

    expect(wrapper.find(TouchableOpacity)).toHaveLength(1);
  });
});

describe('Testing inactive Footer Tab', () => {
  const createWrapper = () =>
    shallow(<Tab icon={props.icon} active={!props.active} onPress={props.onPress} />);

  it('renders as expected', () => {
    const wrapper = createWrapper();

    expect(wrapper.find(TouchableOpacity)).toHaveLength(1);
  });
});
