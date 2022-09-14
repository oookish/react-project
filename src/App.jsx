import React from "react";
// import PropTypes from "prop-types";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Map } from "./components/Map";
import { Registration } from "./components/Registration";
import './css/App.css'


const App = () => {
  // static propTypes = {
  //   isLoggedIn: PropTypes.bool.isRequired,
  // };

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>
    </>
  );
};

export default App;