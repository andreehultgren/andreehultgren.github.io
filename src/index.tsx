import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";

const App = React.lazy(() => import("./App"));

const anchor = document.getElementById("root");

if (anchor) {
  const root = createRoot(anchor);
  root.render(
    <Suspense>
      <App />
    </Suspense>
  );
} else {
  console.error("Failed to load app");
}
