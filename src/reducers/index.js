import { combineReducers } from 'redux';
import { ReduxRouter, reduxReactRouter, pushState } from 'redux-router';
import { routerStateReducer as router} from 'redux-router';

function posts(state = {
    isFetching: false,
    items: []
     }, action) {
    switch (action.type) {
        case 'REQUEST_POSTS':
            return {
                ...state,
                isFetching: true
            }
        case 'RECEIVE_POSTS':
            return {
                ...state,
                isFetching: false,
                items: action.items
            }
        case 'DELETE_POST':
            return {
                ...state,
                items: state.items.filter(post =>
                    post.id !== action.post.id
                )
            }
        default:
            return state;
    }
}
const rootReducer = combineReducers({
  posts,
  router
});

export default rootReducer;
