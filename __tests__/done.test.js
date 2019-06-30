import React from 'react';

import { shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import { Done } from '../src/containers/done';
import Status from '../src/constants/status';

configure({ adapter: new Adapter() });

describe('Test App Component', () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = shallow(<Done status={Status.ALL_DONE} resetState={() => {}} />);
  });
  it('should have OK button', () => {
    expect(wrapper.find('button').length).toBe(1);
  });
  it("should have button with 'OK' ", () => {
    expect(wrapper.find('button').text()).toBe('OK');
  });
});
