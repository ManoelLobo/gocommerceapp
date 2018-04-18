import React from 'react';
import { shallow } from 'enzyme';

import { TouchableOpacity } from 'react-native';

import Tab from 'components/Footer/components/Tab';

describe('Testing Footer Tab', () => {
  const props = {
    icon: 'home',
    active: true,
    onPress: () => {},
  };

  const createWrapper = () => shallow(<Tab {...props} />);

  it('renders active as expected', () => {
    const wrapper = createWrapper();

    expect(wrapper.find(TouchableOpacity)).toHaveLength(1);
  });

  it('renders inactive as expected', () => {
    const wrapper = createWrapper();
    wrapper.setProps({ active: false });

    expect(wrapper.find(TouchableOpacity)).toHaveLength(1);
  });
});
