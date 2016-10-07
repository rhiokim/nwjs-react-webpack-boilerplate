/* global __DEV__ */
import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

require('./App.css');

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalUserCount: 0
    };
  }

  render() {
    return (
      <div>
        <Header />
        <div className="route">
          {this.props.children}
        </div>
        <Footer />
        {
          (() => {
            if (__DEV__) {
              const DevTools = require('DevTools').default;
              return <DevTools />;
            }
          })()
        }
      </div>
    );
  }
}
