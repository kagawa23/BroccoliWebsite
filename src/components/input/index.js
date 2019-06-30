import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Input extends PureComponent {
  static propTypes = {
    placeholder: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    validation: PropTypes.func.isRequired,
    errorMessage: PropTypes.string.isRequired,
    showError: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      input: '',
      isDirty: false
    };
    this.onInputChange = event => {
      const { value } = event.target;
      const { validation } = this.props;
      this.setState({ input: value, isDirty: true });
      validation(value.trim());
    };
  }

  render() {
    const { placeholder, errorMessage, id, showError } = this.props;
    const { input, isDirty } = this.state;

    return (
      <div className="input-container">
        <input type="input" value={input} onChange={this.onInputChange} placeholder={placeholder} id={id} />
        <div className={`error-message ${isDirty && showError ? 'visible' : 'invisible'}`}>{errorMessage}</div>
      </div>
    );
  }
}

export default Input;
