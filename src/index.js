import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import './index.css';
import App from './containers/todos/App';
import { reducers } from './reducers/todosReducer';


const store = createStore(reducers)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));
