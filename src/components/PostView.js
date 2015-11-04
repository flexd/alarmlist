import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../actions';
import { Post } from '../components/Post'

export class PostView extends Component {
  componentDidMount() {
    this.props.initialFetch();
  }
  render() {
    var {onPostClick, isFetching} = this.props;
    return (
      <div>
      <h1>Hello, Are we fetching? { isFetching == true ? "yes" : "no" }</h1>
      <ul>
        {this.props.posts.map((post, i) =>
          <Post onClick={() => this.props.onPostClick(post)} key={i} post={post} />
        )}
      </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
  };
}
// Map Redux actions to component props
function mapDispatchToProps (dispatch) {
  return {
    onPostClick: (post) => dispatch(deletePost(post)),
  }
}
// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(PostView);
