import React from "react";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./App";
import { reducers } from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

const ReduxProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default ReduxProvider;
