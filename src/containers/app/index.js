import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InvitationModal from '../invitation';
import DoneModal from '../done';
import { showInvitationFrom } from '../../actions';
import './style.scss';

export class App extends PureComponent {
  static propTypes = {
    showInvitationFrom: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.onInvitationClick = () => {
      const { showInvitationFrom: onInvitationClick } = this.props;
      onInvitationClick();
    };
  }

  render() {
    return (
      <>
        <header className="company-logo">
          <div className="logo" alt="logo">
            Broccoli & co.
          </div>
        </header>
        <section>
          <div className="container">
            <h1>A better way</h1>
            <h1>to enjoy every day.</h1>
            <h5>Be the first to know when we launch</h5>
            <button className="request-button" type="button" onClick={this.onInvitationClick}>
              Request an invite
            </button>
          </div>
        </section>
        <footer className="company-info">
          <h5 className="madewith">
            Made with
            <span role="img" aria-label="heart">
              ❤️
            </span>
            in Melborne
          </h5>
          <h5 className="copyright">@ 2016 Broccoli & co. All rights reserved.</h5>
        </footer>
        <InvitationModal />
        <DoneModal />
      </>
    );
  }
}

export default connect(
  ({ status }) => ({
    status
  }),
  { showInvitationFrom }
)(App);
