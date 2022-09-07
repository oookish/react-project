import React, { Component } from "react";
import { connect } from "react-redux";
import { authenticate } from "../redux/actions";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class Home extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    authenticate: PropTypes.func.isRequired,
  };

  authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    this.props.authenticate(email.value, password.value);
  };

  render() {
    return (
      <>
        {this.props.isLoggedIn ? (
          <p>
            Вы вошли
            <Link to="/profile">В профиль</Link>
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

export const HomeWithAuth = connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
  { authenticate }
)(Home);
