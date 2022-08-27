import React from "react";
import { HomeWithAuth } from "./components/Home";
import { Map } from "./components/Map";
import { ProfileWithAuth } from "./components/Profile";
import { withAuth } from "./AuthContex";
import "./App";

const PAGES = {
  home: (props) => <HomeWithAuth {...props} />,
  map: (props) => <Map {...props} />,
  profile: (props) => <ProfileWithAuth {...props} />,
};

class App extends React.Component {
  state = { currentPage: "home" };

  navigateTo = (page) => {
    if (this.props.isLoggedIn) {
      this.setState({ currentPage: page });
    } else {
      this.setState({ currentPage: "home" });
    }
  };

  render() {
    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <button
                  onClick={() => {
                    this.navigateTo("home");
                  }}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.navigateTo("map");
                  }}
                >
                  Map
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.navigateTo("profile");
                  }}
                >
                  Profile
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section>
            {PAGES[this.state.currentPage]({ navigate: this.navigateTo })}
          </section>
        </main>
      </>
    );
  }
}

export default withAuth(App);