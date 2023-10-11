import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SDKProvider } from "@contentful/react-apps-toolkit";
import { GlobalStyles } from "@contentful/f36-components";
import { App } from "./app";

const element = document.getElementById("root")!;

createRoot(element).render(
  <StrictMode>
    <SDKProvider>
      <GlobalStyles />
      <App />
    </SDKProvider>
  </StrictMode>
);
