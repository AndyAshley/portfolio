import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/global.scss";
import { ThemeProvider } from "@mui/material";
import MainTheme from "./theme/MainTheme.tsx";
import PageWrapper from "./components/PageWrapper/PageWrapper.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={MainTheme}>
      <PageWrapper>
        <App />
      </PageWrapper>
    </ThemeProvider>
  </React.StrictMode>
);
