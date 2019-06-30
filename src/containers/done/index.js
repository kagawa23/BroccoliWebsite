import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from '../../components/modal';
import Status from '../../constants/status';
import { resetState } from '../../actions';

import './style.scss';

export class Done extends PureComponent {
  static propTypes = {
    status: PropTypes.number.isRequired,
    resetState: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.done = () => {
      const { resetState: allDone } = this.props;
      allDone();
    };
  }

  render() {
    const { status } = this.props;
    return (
      <Modal visible={status === Status.ALL_DONE}>
        <div className="modal-container">
          <div className="modal-title">
            <h3>All Done!</h3>
          </div>
          <div className="modal-body">
            <h4>You will be one of the first to experience</h4>
            <h4>Broccoli & co. when we launch</h4>
          </div>
          <button type="button" className="form-button" onClick={this.done}>
            OK
          </button>
        </div>
      </Modal>
    );
  }
}

export default connect(
  state => ({ status: state.status }),
  { resetState }
)(Done);
