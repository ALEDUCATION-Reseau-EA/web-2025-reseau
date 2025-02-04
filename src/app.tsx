import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";

import "@fontsource/inter";
import "./app.css";

export default function App() {
  return (
    <Router
      root={props => (
        <>
          <Nav />
          <div class="h-20" />
          <Suspense>{props.children}</Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
