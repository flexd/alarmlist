import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
      {this.props.children}
      </div>
    );
  }
}
export default App;
