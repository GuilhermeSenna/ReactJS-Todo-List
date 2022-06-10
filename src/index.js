import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TodoProvider from "./context/TodoContext";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </StrictMode>
);
