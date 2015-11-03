import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
import { IndexRoute, Route, Link } from 'react-router'
import { createHistory } from 'history';
// React components for Redux DevTools
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import App from './containers/App';
import configureStore from './store/configureStore';

import Posts  from './components/Posts';
import Post  from './components/Posts';

const store = configureStore();

render(
  <div>
  <Provider store={store}>
    <ReduxRouter>
        <Route path="/" component={App}>
          <IndexRoute component={Posts} />
          <Route path="alarms" component={Posts}>
            <Route path="alarm/:id" component={Post} />
          </Route>
        </Route>
      </ReduxRouter>
  </Provider>
  <DebugPanel top right bottom>
    <DevTools store={store} monitor={LogMonitor} />
 </DebugPanel>
  </div>,
  document.body
);
