import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { topicsReducer } from './reducers';

const reducer = combineReducers({
  topics: topicsReducer
});

const middleware = [];
middleware.push(thunk);

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;