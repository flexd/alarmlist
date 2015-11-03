import fetch from 'isomorphic-fetch';

const REQUEST_POSTS = 'REQUEST_POSTS';
const RECEIVE_POSTS = 'RECEIVE_POSTS';
const FETCH_POSTS = 'FETCH_POSTS';
const DELETE_POST = 'DELETE_POST';

var GOOGLE_FEED_API_URL = "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=-1&q="
export function deletePost(post) {
  return {
    type: DELETE_POST,
    post
  };
}

function requestPosts(url) {
  return {
    type: REQUEST_POSTS,
    url
  };
}

function receivePosts(url, json) {
  return {
    type: RECEIVE_POSTS,
    url: url,
    items: json,
    receivedAt: Date.now()
  };
}
export function fetchPosts(url) {
    return function (dispatch) {
            dispatch(requestPosts(url));
            //var feedurl = GOOGLE_FEED_API_URL + encodeURIComponent(url);
            return fetch('http://jsonplaceholder.typicode.com/posts')
              .then(response => response.json())
              .then(json => dispatch(receivePosts(url, json)));
    }
}
