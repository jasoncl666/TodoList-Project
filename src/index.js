import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

import {Provider} from "react-redux";
import {createStore} from "redux";

import rootReducer from './Reducers';

import {addTodo, setCurTodo, editTodo} from "./Actions";

const store=createStore(rootReducer)

const todo1 = {
  content: "one",
  frequency: "3",
  progress: "4"
}

const edit = {
  id: 0,
  progress: 10
}



// const unsubscribe = store.subscribe(() => console.log(store.getState()))

// store.dispatch(addTodo(todo1))
// store.dispatch(editTodo(edit))


// unsubscribe()


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

