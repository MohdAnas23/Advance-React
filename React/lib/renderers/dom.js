import React from "react";
import { createRoot } from "react-dom/client";

import StateApi from "state-api";
import App from "components/App";

const store = new StateApi(window.initialData);

const container = document.getElementById("root");
createRoot(container).render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
