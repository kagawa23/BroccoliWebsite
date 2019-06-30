import React from 'react';

import { shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import { App } from '../src/containers/app';

configure({ adapter: new Adapter() });

describe('Test App Component', () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = shallow(<App showInvitationFrom={() => {}} />);
  });
  it('should have logo', () => {
    expect(wrapper.find('.company-logo').length).toBe(1);
  });
  it("should have request button with text 'Request an invite'", () => {
    expect(wrapper.find('button').text()).toBe('Request an invite');
  });
  it('should have footer', () => {
    expect(wrapper.find('footer').length).toBe(1);
  });
});
