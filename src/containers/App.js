import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../actions';
import Posts  from '../components/Posts';

class App extends Component {
  componentDidMount() {
    this.props.initialFetch();
  }
  render() {
    var {onPostClick, reduxState, posts, isFetching} = this.props;
    return (
      <div>
      <h1>Hello, Are we fetching? { isFetching == true ? "yes" : "no" }</h1>
      {this.props.children}
      </div>
    );
  }
}


App.propTypes = {
};

function mapStateToProps(state) {
  return {
    isFetching: state.posts.isFetching
  };
}
// Map Redux actions to component props
function mapDispatchToProps (dispatch) {
  return {
    onPostClick: (post) => dispatch(deletePost(post)),
    initialFetch: () => dispatch(fetchPosts('someurl'))
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(App);
