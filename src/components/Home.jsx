import React, { Component } from "react";
import { withAuth } from "../AuthContex";
import PropTypes from "prop-types";

export class Home extends Component {

  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    navigate: PropTypes.func.isRequired,
    logIn: PropTypes.func.isRequired
  };

  goToProfile = () => {
    this.props.navigate("profile");
  };

  authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    this.props.logIn(email.value, password.value);
  };

  render() {
    return (
      <>
        {this.props.isLoggedIn ? (
          <p>
            Вы вошли
            <button onClick={this.goToProfile}>В профиль</button>
          </p>
        ) : (
          <form onSubmit={this.authenticate}>
            <div>
              <h1>Войти</h1>
            </div>
            <label htmlFor="email">Логин</label>
            <input id="email" type="email" name="email" size={28} />
            <label htmlFor="password">Пароль</label>
            <input id="password" type="password" name="password" size={28} />
            <button type="submit">Войти</button>
          </form>
        )}
      </>
    );
  }
}

export const HomeWithAuth = withAuth(Home);
