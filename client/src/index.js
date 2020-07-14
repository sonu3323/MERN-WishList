import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { createStore , compose , applyMiddleware } from "redux";
import  { Provider } from 'react-redux'
import reducer from './Redcuer/reducer';
import thunk from 'redux-thunk'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store =  createStore(reducer ,composeEnhancers(applyMiddleware(thunk)));



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


// if(module.hot) {
//   module.hot.accept()
// }