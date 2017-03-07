import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

const USE_DEV_TOOLS =
	process.env.DEV &&
	process.env.IS_BROWSER &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export default function configureStore(options = {}) {
  const {
		initialState = {}
	} = options;

  const middlewares = [];
  middlewares.push(
    promiseMiddleware({
      promiseTypeSuffixes: ['START', 'SUCCESS', 'ERROR'],
    }),
    thunk,
  );

  if (USE_DEV_TOOLS) {
    middlewares.push(createLogger());
  }

  const composeEnhancers = USE_DEV_TOOLS
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: compose;

  const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middlewares)
  ));


	// window.addEventListener('resize', () => store.dispatch(calculateResponsiveState(window)));

  return store;
}
