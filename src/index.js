import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

import {Provider} from "react-redux";
import {createStore} from "redux";

import rootReducer from './Reducers';

import {addTodo, setCurTodo} from "./Actions";

const store=createStore(rootReducer)

// const todo1 = {
//   content: "one",
//   frequency: "3",
//   progress: "4"
// }

// const todo2 = {
//   content: "two",
//   frequency: "3",
//   progress: "8"
// }



// const unsubscribe = store.subscribe(() => console.log(store.getState()))

// store.dispatch(addTodo(todo1))
// store.dispatch(setCurTodo(todo1))
// store.dispatch(addTodo(todo2))
// store.dispatch(setCurTodo(todo2))


// unsubscribe()


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

