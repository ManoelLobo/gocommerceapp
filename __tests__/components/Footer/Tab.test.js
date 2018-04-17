import React from 'react';
import { shallow } from 'enzyme';

import { TouchableOpacity } from 'react-native';

import Tab from 'components/Footer/components/Tab';

describe('Testing Footer Tab', () => {
  const props = {
    icon: 'home',
    onPress: () => {},
  };

  const createWrapper = (isActive = true) =>
    shallow(<Tab icon={props.icon} active={isActive} onPress={props.onPress} />);

  it('renders active as expected', () => {
    const wrapper = createWrapper();

    expect(wrapper.find(TouchableOpacity)).toHaveLength(1);
  });

  it('renders inactive as expected', () => {
    const wrapper = createWrapper(false);

    expect(wrapper.find(TouchableOpacity)).toHaveLength(1);
  });
});
