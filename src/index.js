import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

import {Provider} from "react-redux";
import {createStore} from "redux";

import rootReducer from './Reducers';

import {addTodo} from "./Actions";

const store=createStore(rootReducer)

// const unsubscribe = store.subscribe(() => console.log(store.getState()))

// store.dispatch(addTodo({content: 'Learn about actions', frequency: '2'}))

// unsubscribe()


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

