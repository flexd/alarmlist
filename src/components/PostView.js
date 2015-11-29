import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../actions';
import { Post } from '../components/Post'

export class PostView extends Component {
  render() {
    var {currentPost} = this.props;
    return (
      <div>
        <Post post={currentPost} />
      </div>
    );
  }
}
// Map Redux actions to component props
//function mapDispatchToProps (dispatch) {
  //return {
    //onPostClick: (post) => dispatch(deletePost(post)),
  //}
//}
// Wrap the component to inject dispatch and state into it
function selectPost(state) {
  const { id } = state.router.params;
  return {
    currentPost: state.posts.items[id-1]
  }
}

export default connect(selectPost)(PostView);
