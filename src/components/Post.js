import React, { PropTypes, Component } from 'react';

export class Post extends Component {
  render() {
    return (
        <li>{this.props.post.title}<button onClick={this.props.onClick} iconClassName="material-icons">x</button></li>
    );
  }
}
