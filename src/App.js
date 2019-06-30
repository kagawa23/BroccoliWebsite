import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './app.scss';

class Test extends PureComponent {
  static propTypes = {
    message: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { message } = this.props;
    return (
      <div>
        Hello worlds
        {message}
      </div>
    );
  }
}

export default Test;
