import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
import { IndexRoute, Route, Link } from 'react-router'
import { createHistory } from 'history';
// React components for Redux DevTools
import App from './containers/App';
import DevTools from './containers/DevTools';
import configureStore from './store/configureStore';

import Posts  from './components/Posts';
import PostView  from './components/PostView';

const store = configureStore();

render(
  <Provider store={store}>
    <div>
    <ReduxRouter>
    <Route path="/" component={App}>
          <IndexRoute component={Posts} />
          <Route path="alarms" component={Posts} />
          <Route path="alarms/details/:id" component={PostView} />
        </Route>
    </ReduxRouter>
    <DevTools />
    </div>
    </Provider>,
  document.body
);
