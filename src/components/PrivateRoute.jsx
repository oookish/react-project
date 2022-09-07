import React from "react";
import { Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";

// export function PrivateRoute({ children }) {
//   connect((state) => ({
//     isLoggedIn: state.auth.isLoggedIn,
//   }))(({ component: Component, isLoggedIn, ...rest }) => (
//     <Route
//       {...rest}
//       render={(props) =>
//         isLoggedIn ? <Component {...props} /> : <Navigate to="/" />
//       }
//     />
//   ));
// }

export const PrivateRoute = connect((state) => ({
  isLoggedIn: state.auth.isLoggedIn,
}))(({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn ? <Component {...props} /> : <Navigate to="/" />
    }
  />
));

// export const PrivateRoute = () => {
//   const auth = null;
//   return auth ? <Outlet /> : <Navigate to="/" />;
// }
