import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const anchor = document.getElementById("root");

if (anchor) {
  createRoot(anchor).render(<App />);
} else {
  console.error("Failed to load app");
}
