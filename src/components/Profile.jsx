import React, { Component } from "react";
import { connect } from "react-redux";
import { logIn, logOut } from "../redux/actions";
import PropTypes from "prop-types";

export class Profile extends Component {
  static propTypes = {
    logOut: PropTypes.func.isRequired,
  };

  unauthenticate = (event) => {
    event.preventDefault();
    this.props.logOut();
  };

  render() {
    return (
      <>
        <p>
          <button onClick={this.unauthenticate}>Выйти</button>
        </p>
      </>
    );
  }
}

export const ProfileWithAuth = connect(null, { logIn, logOut })(Profile);
