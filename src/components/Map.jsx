import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectSignInData } from "../redux/userSelector";

import { setPage } from "../redux/actions";
import { Menu } from "./Menu";
import { Mapbox } from "./Mapbox";

import "../css/Map.css";

export const Map = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogIn = useSelector(selectSignInData);

  useEffect(() => {
    if (isLogIn) {
      navigate("/map");
      dispatch(setPage("Map"));
    } else {
      navigate("/");
      dispatch(setPage("Home"));
    }
  }, [isLogIn, navigate, dispatch]);

  return (
    <div className="map-page">
      <Menu activeItem='Map'/>
      <div className="class-container">
        <Mapbox />
      </div>
    </div>
  )
};

