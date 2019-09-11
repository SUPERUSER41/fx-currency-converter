/* global window, document */
if (!window._babelPolyfill) {
  require("@babel/polyfill");
}

//TODO: Add redux

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import RootReducer from "./reducers";
import Shortcode from "./containers/Shortcode.jsx";

document.addEventListener("DOMContentLoaded", function() {
  const shortcode_containers = document.querySelectorAll(
    ".wp-currency-converter-shortcode"
  );

  for (let i = 0; i < shortcode_containers.length; ++i) {
    const objectId = shortcode_containers[i].getAttribute("data-object-id");

    ReactDOM.render(
      <Provider store={createStore(RootReducer)}>
        <Shortcode wpObject={window[objectId]} />
      </Provider>,
      shortcode_containers[i]
    );
  }
});
