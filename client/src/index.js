import react from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { reducers } from './reducers';

const store = configureStore(reducers, compose(applyMiddleware(thunk)));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
