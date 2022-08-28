import React, { Component } from "react";
import { withAuth } from "../AuthContex";

export class Profile extends Component {
  unauthenticate = (event) => {
    event.preventDefault();
    this.props.logOut();
    this.props.navigate("home");
  };

  goonmap = (event) => {
    event.preventDefault();
    this.props.navigate("map");
  };

  render() {
    return (
      <>
        <p>
          <button onClick={this.unauthenticate}>Выйти</button>
        </p>
        <p>
          Перейти на карту
          <button onClick={this.goonmap}>Карта</button>
        </p>
      </>
    );
  }
}

export const ProfileWithAuth = withAuth(Profile);
