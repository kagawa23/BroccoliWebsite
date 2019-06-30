import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import sendInvitation from '../../io/request';
import { validateEmail, validateName, validateEmailConfrim } from '../../utils';
import { updateFromFiledAndValidation, showAllDone } from '../../actions';
import Modal from '../../components/modal';
import InputWithValidation from '../../components/input';
import Status from '../../constants/status';
import './style.scss';

export class Invitation extends PureComponent {
  static propTypes = {
    isValidateFullName: PropTypes.bool.isRequired,
    isValidateEmail: PropTypes.bool.isRequired,
    isValidateConfrimEmail: PropTypes.bool.isRequired,
    updateFromFiledAndValidation: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    status: PropTypes.number.isRequired,
    confirmEmail: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    showAllDone: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      requesting: false,
      requestFailed: false,
      errorMessage: ''
    };
    this.validateName = fullName => {
      const validateResult = validateName(fullName);
      const { updateFromFiledAndValidation: updateFrom } = this.props;
      updateFrom({ validation: { isValidateFullName: validateResult }, form: { fullName } });
    };

    this.validateEmail = email => {
      const validateResult = validateEmail(email);
      const { updateFromFiledAndValidation: updateFrom, confirmEmail } = this.props;
      updateFrom({
        validation: {
          isValidateEmail: validateResult,
          isValidateConfrimEmail: validateEmailConfrim(email, confirmEmail)
        },
        form: { email }
      });
    };

    this.validateConfirmEmail = confirmEmail => {
      const { email } = this.props;
      const validateResult = validateEmailConfrim(email, confirmEmail);
      const { updateFromFiledAndValidation: updateFrom } = this.props;
      updateFrom({ validation: { isValidateConfrimEmail: validateResult }, form: { confirmEmail } });
    };
    this.submitRequest = () => {
      this.setState({ requesting: false, requestFailed: false, errorMessage: '' });
      const {
        isValidateFullName,
        isValidateEmail,
        isValidateConfrimEmail,
        showAllDone: showDoneModal,
        fullName: name,
        email
      } = this.props;
      const isAllFieldsValidate = isValidateEmail && isValidateFullName && isValidateConfrimEmail;
      if (!isAllFieldsValidate) {
        return;
      }
      this.setState({ requesting: true });
      sendInvitation({ name, email })
        .then(() => {
          showDoneModal();
        })
        .catch(err => {
          console.error(err);
          this.setState({ requesting: false, requestFailed: true, errorMessage: err.message });
        });
    };
  }

  render() {
    const { status, isValidateFullName, isValidateEmail, isValidateConfrimEmail } = this.props;
    const { requesting, requestFailed, errorMessage } = this.state;
    return (
      <Modal visible={status === Status.FILL_INFO}>
        <div className="invitation-form" style={{ backgroundColor: 'white' }}>
          <h3>Request an invite</h3>
          <div className="form-main">
            <InputWithValidation
              placeholder="Full name"
              id="fullName"
              validation={this.validateName}
              errorMessage="At least 3 character long"
              showError={!isValidateFullName}
            />
            <InputWithValidation
              placeholder="Email"
              id="emailAddress"
              validation={this.validateEmail}
              errorMessage="Please input validate email"
              showError={!isValidateEmail}
            />
            <InputWithValidation
              placeholder="Confirm email"
              id="confromEmail"
              validation={this.validateConfirmEmail}
              errorMessage="Please match the email above"
              showError={!isValidateConfrimEmail}
            />
          </div>
          <button
            type="button"
            disabled={requesting}
            onClick={this.submitRequest}
            className="form-button send-invitation"
          >
            Send
          </button>
          <div className={`error-message ${requestFailed ? 'visible' : 'invisible'}`}>{errorMessage}</div>
        </div>
      </Modal>
    );
  }
}

export default connect(
  state => ({
    ...state.validation,
    status: state.status,
    ...state.form
  }),
  { updateFromFiledAndValidation, showAllDone }
)(Invitation);
