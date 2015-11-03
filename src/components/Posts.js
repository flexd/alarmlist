import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions';

export default class Posts extends Component {
  render() {
    return (
      <ul>
        {this.props.posts.map((post, i) =>
          <Post onClick={() => this.props.onPostClick(post)} key={i} post={post} />
        )}
      </ul>
    );
  }
}
function mapStateToProps(state) {
  const { posts } = state;
  return {
    reduxState: state,
    posts: posts.items,
    isFetching: posts.isFetching
  };
}
// Map Redux actions to component props
function mapDispatchToProps (dispatch) {
  return {
    onPostClick: (post) => dispatch(deletePost(post))
  }
}
// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(Posts);

Posts.propTypes = {
};
export class Post extends Component {
  render() {
    return (
        <li>{this.props.post.title}<button onClick={this.props.onClick} iconClassName="material-icons">x</button></li>
    );
  }
}
Post.propTypes = {
};
