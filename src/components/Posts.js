import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { fetchPosts, deletePost } from '../actions';
import { Post } from '../components/Post'

export class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    var {onPostClick, isFetching} = this.props;
    return (
      <div>
      <h1>Hello, Are we fetching? { isFetching == true ? "yes" : "no" }</h1>
      <ul>
        {this.props.posts.map((post, i) =>
          <Post key={i} post={post} />
        )}
      </ul>
      </div>
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
    onPostClick: (post) => dispatch(pushState(null, '/#alarms/details/'+post.id)),
    initialFetch: () => dispatch(fetchPosts('someurl'))
  }
}
// Wrap the component to inject dispatch and state into it
//export default connect(mapStateToProps, mapDispatchToProps)(Posts);
export default connect(mapStateToProps, { deletePost, fetchPosts })(Posts);
