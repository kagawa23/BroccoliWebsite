import React from 'react';

import { mount, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import { Invitation } from '../src/containers/invitation';
import Status from '../src/constants/status';

// setup file

configure({ adapter: new Adapter() });

describe('Test Invitation Component', () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = mount(
      <Invitation
        isValidateFullName
        isValidateEmail
        isValidateConfrimEmail
        status={Status.FILL_INFO}
        email=""
        confirmEmail=""
        fullName=""
        showAllDone={() => {}}
        updateFromFiledAndValidation={() => {}}
      />
    );
  });
  it('invitation input should be 3 inputs', () => {
    const inputs = wrapper.find('input');
    expect(inputs.length).toBe(3);
  });

  it('invitation has a button to label send', () => {
    const sendButton = wrapper.find('.form-button');
    expect(sendButton.text()).toBe('Send');
  });
});
