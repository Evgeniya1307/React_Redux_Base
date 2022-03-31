import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';



const store= createStore(rootReducer)

ReactDOM.render(<Provider store={store}>
  <App/>
  </Provider>,
  document.getElementById('root')
);
