import React from "react";
import { HomeWithAuth } from "./components/Home";
import { Map } from "./components/Map";
import { ProfileWithAuth } from "./components/Profile";
import { PrivateRoute } from "./components/PrivateRoute";
import { connect } from "react-redux";
import "./App";
import { Link, Routes, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/map">Map</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section>
            <Routes>
              <Route path="/" element={<HomeWithAuth />} />
              <Route path="/map" element={<PrivateRoute><Map /></PrivateRoute>} />
              <Route path="/profile" element={<PrivateRoute><ProfileWithAuth /></PrivateRoute>} />
            </Routes>
          </section>
        </main>
      </>
    );
  }
}

export default connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }))(App);
