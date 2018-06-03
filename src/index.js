import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";

import CountStore from "./store/CounterStore";
import Counter from "./components/counter.js";

const counterStore = new CountStore();

render(
  <div>
    <DevTools />
    <Counter store={counterStore} />
  </div>,
  document.getElementById("root")
);

// playing around in the console
//window.store = counterStore;
