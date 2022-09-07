import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
// import { theme } from "loft-taxi-mui-theme";
// import { MuiThemeProvider } from "@material-ui/core/styles";
console.log(React.version);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// ReactDOM.render(
//   <MuiThemeProvider theme={theme}>
//     <AuthProvider>
//       <App />
//     </AuthProvider>
//   </MuiThemeProvider>,
//   document.getElementById("root")
// );

reportWebVitals();
