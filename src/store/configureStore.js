import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// Redux DevTools store enhancers
import { devTools, persistState } from 'redux-devtools';
import createLogger from 'redux-logger';
import { reduxReactRouter} from 'redux-router';
import { createHistory } from 'history';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

const finalCreateStore = compose(
    applyMiddleware(
        thunkMiddleware,
        createLogger()
    ),
    reduxReactRouter({ createHistory }),
    DevTools.instrument(),
    // Lets you write ?debug_session=<name> in address bar to persist debug sessions
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
