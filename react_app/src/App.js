import React from 'react';
import { Home } from "./Home";
import { Registration } from "./Registration";
import { Map } from "./Map";
import { Profile } from "./Profile";
import './App.css';

const PAGES = {
  home: <Home/>,
  registration: <Registration/>,
  map: <Map/>,
  profile: <Profile/>,
}

class App extends React.Component {
  state = {currentPage: "home"};

  navigateTo = (page) => {
    this.setState( {currentPage: page});
  };

  render() {
    return <>
    <header>
      <nav>
        <ul>
          <li>
            <button onClick={() => {this.navigateTo("home")}}>Home</button>
          </li>
          <li>
            <button onClick={() => {this.navigateTo("registration")}}>Registration</button>
          </li>
          <li>
            <button onClick={() => {this.navigateTo("map")}}>Map</button>
          </li>
          <li>
            <button onClick={() => {this.navigateTo("profile")}}>Profile</button>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <section>
        {PAGES[this.state.currentPage]}
      </section>
    </main>
    </>
  }
}

export default App;
