import React, { PureComponent } from 'react';
import logo from './logo.svg';

const COMPANY_COPY_RIGHT = '@ 2016 Broccoli & co. All rights reserved.';
const COMPANY_MADE_WITH = 'Made with ❤️ in Melbutne';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="app">
        <header className="company-logo">
          <img style={{ height: 40 }} className="logo" src={logo} alt="logo" />
        </header>
        <section />
        <footer className="company-info">
          <h5 className="madewith">{COMPANY_MADE_WITH}</h5>
          <h5 className="copyright">{COMPANY_COPY_RIGHT}</h5>
        </footer>
      </div>
    );
  }
}

export default App;
