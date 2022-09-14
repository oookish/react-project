import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { registrationAction, setPage } from "../redux/actions";
import { selectSignInData } from "../redux/userSelector";
import '../css/Registration.css'
import logo from "../img/logo-taxi.svg"

export const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogIn = useSelector(selectSignInData);
  const onSubmit = (event) => {
    event.preventDefault();

    const payload = {
      payloadEmail: event.target.email.value,
      payloadName: event.target.name.value,
      payloadSurname: event.target.name.value,
      payloadPassword: event.target.password.value,
    };

    dispatch(registrationAction(payload));
  };

  useEffect(() => {
    if (isLogIn) {
      navigate("/map");
      dispatch(setPage("/map"));
    }
  }, [dispatch, isLogIn, navigate]);

  return (
    <div>
      <div className="login__left-column">
        <img src={logo} className="login-logo" alt="" />
      </div>
      <div className="login__right-column">
        <div className="right-column__content">
          <div className="form-content">
            <div className="registration">Log In</div>
            <form onSubmit={onSubmit} className="form">
              <div className="form__left-column">
                <TextField
                  id="email"
                  type="email"
                  name="email"
                  label="email"
                  focused
                  sx={{ marginTop: 3, marginBottom: 3, width: 350 }}
                />
                <TextField
                  id="name"
                  type="text"
                  name="name"
                  label="What's your name"
                  focused
                  sx={{ marginBottom: 3, width: 350 }}
                />
                <TextField
                  id="password"
                  type="password"
                  name="password"
                  label="Create password"
                  focused
                  sx={{ marginBottom: 3, width: 350 }}
                />
                <button type="submit" className="button-login">
                  Registration
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
