import { React, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { setPage } from "../redux/actions";
import { clearUserData, setAuthState } from "../redux/actions";
import { selectPage } from "../redux/uiSelector";
import "../css/Menu.css";
import logo from "../img/logo-map.svg";

export const Menu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const page = useSelector(selectPage);

  const isActive = useMemo(
    () => (value) => "navigation-button" + ((value === page) ? "active" : ""),
    [page]
  );

  const onClickExit = useCallback(() => {
    dispatch(clearUserData());
    dispatch(setAuthState(false));
    dispatch(setPage("Home"));
    navigate("/");
  }, [dispatch, navigate]);

  const onClickMap = useCallback(() => {
    dispatch(setPage("Map"));
  }, [dispatch]);

  const onClickProfile = useCallback(() => {
    dispatch(clearUserData());
    dispatch(setPage("Home"));
    navigate("/");
  }, [dispatch, navigate]);
  
  return (
    <header data-testid="nav-menu-component" className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <nav className="navigation-menu">
        <ul className="navigation-items">
          <li className="navigation-item">
            <Link to="/map">
              <button
                type="button"
                className={isActive("Map")}
                onClick={onClickMap}
              >
                Map
              </button>
            </Link>
          </li>
          <li className="navigation-item">
            <Link to="/map">
              <button
                type="button"
                className={isActive("Profile")}
                onClick={onClickProfile}
              >
                Profile
              </button>
            </Link>
          </li>
          <li className="navigation-item">
            <button
              data-testid="exit-button"
              type="button"
              className={isActive("Home")}
              onClick={onClickExit}
            >
              Exit
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
