import React from "react";
import ReactDOM from "react-dom/client";
import { TimerProvider } from "@layerhub-io/use-timer";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider>
    <TimerProvider>
      <App />
    </TimerProvider>
  </ChakraProvider>
);
