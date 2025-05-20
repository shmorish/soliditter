import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import AppRoutes from "./router";
import App from "./App";
import AuthProvider from "./context/auth";

import "./index.css";

render(
  () =>
    <Router root={App}>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>,
  document.getElementById("root")!
)
