import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Footer from 'components/Footer';
import Tab from 'components/Footer/components/Tab';

describe('Testing Footer', () => {
  const spy = sinon.spy();
  const props = {
    navigationState: {},
    jumpToIndex: spy,
  };

  const createWrapper = () => shallow(<Footer {...props} />);

  it('renders as expected', () => {
    const wrapper = createWrapper();

    expect(wrapper.find(Tab)).toHaveLength(2);
  });

  it('calls the page navigation function', () => {
    const wrapper = createWrapper();

    wrapper.childAt(0).simulate('press');

    expect(spy.calledOnce).toBe(true);
  });
});
