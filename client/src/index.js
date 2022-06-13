import react from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import  Allreducers  from './reducers';
import './index.css';

const store = createStore(Allreducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
