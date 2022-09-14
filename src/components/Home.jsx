import { React, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { authAction, setPage } from "../redux/actions";
import { selectSignInData } from "../redux/userSelector";
import logo from "../img/logo-taxi.svg";
import "../css/Home.css";

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogIn = useSelector(selectSignInData);

  const onSubmitForm = useCallback(
    (event) => {
      event.preventDefault();

      const { email, password } = event.target;

      const payload = {
        payloadEmail: email.value,
        payloadPassword: password.value,
      };

      dispatch(authAction(payload));
    },
    [dispatch]
  );

  const onClickRegistrationButton = useCallback(() => {
    navigate("/registration");
    dispatch(setPage("Registration"));
  }, [dispatch, navigate]);

  useEffect(() => {
    if (isLogIn) {
      navigate("/map");
      dispatch("Map");
    }
  }, [dispatch, isLogIn, navigate]);

  return (
    <div>
      <div className="login__left-column">
        <img src={logo} className="login-logo" alt="logo" />
      </div>
      <div className="login__right-column">
        <div className="right-column__content">
          <div className="form-content">
            <div className="enter">Авторизация</div>
            <form
              data-testid="form-auth-page"
              onSubmit={onSubmitForm}
              className="form"
            >
              <div className="form__left-column">
                <TextField
                  id="email"
                  type="email"
                  name="email"
                  label="Email"
                  focused
                  sx={{
                    marginTop: 3,
                    marginBottom: 3,
                    width: 350,
                  }}
                />
                <TextField
                  id="password"
                  type="password"
                  name="password"
                  label="Password"
                  focused
                  sx={{
                    marginBottom: 3,
                    width: 350,
                  }}
                />
                <button
                  data-testid="submit-button"
                  type="submit"
                  className="btn-login"
                >
                  Войти
                </button>
              </div>
            </form>
            <div className="new-profile">
              <div className="new-profile__text">Новый пользователь?</div>
              <button
                data-testid="new-profile-btn"
                className="new-profile-btn"
                type="button"
                onClick={onClickRegistrationButton}
              >
                Регистрация
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
