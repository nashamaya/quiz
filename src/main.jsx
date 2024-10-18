import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CounsellingApp from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounsellingApp />
  </StrictMode>
);
