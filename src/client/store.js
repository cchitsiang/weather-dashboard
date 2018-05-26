import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import reducers from './reducers';

const initialState = {};
const enhancers = [];
const middleware = [promise(), thunk, createLogger()];

if (process.env.NODE_ENV === 'development') {
	const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

	if (typeof devToolsExtension === 'function') {
		enhancers.push(devToolsExtension());
	}
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export default createStore(reducers, initialState, composedEnhancers);
