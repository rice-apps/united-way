import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

/* import mantine ui components needed for the impact carousel object */
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { MantineProvider } from "@mantine/core";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <MantineProvider> */}
      <App />
      {/* </MantineProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
);
