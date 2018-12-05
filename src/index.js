import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { addPerson } from './actions';
import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {});
store.dispatch(addPerson('Josh White'));
store.dispatch(addPerson('Jon Cheung'));

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)