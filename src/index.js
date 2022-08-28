import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./AuthContex";
// import { theme } from "loft-taxi-mui-theme";
// import { MuiThemeProvider } from "@material-ui/core/styles";
console.log(React.version);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

// ReactDOM.render(
//   <MuiThemeProvider theme={theme}>
//     <App />
//   </MuiThemeProvider>,
//   document.getElementById("root")
// );

reportWebVitals();
