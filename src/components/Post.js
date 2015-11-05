import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router'

export class Post extends Component {
  render() {
    return (
        <li>{this.props.post.title}<Link to={`/alarms/details/${this.props.post.id}`}><button>x</button></Link></li>
    );
  }
}
