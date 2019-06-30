import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Modal extends PureComponent {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    children: PropTypes.element.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { visible, children } = this.props;
    return (
      <div className={`modal-mask ${visible ? 'visible' : 'invisible'}`}>
        <div className="modal-content">{children}</div>
      </div>
    );
  }
}

export default Modal;
