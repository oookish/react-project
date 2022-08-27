import React from "react";
import { withAuth } from "../AuthContex";

export const Profile = () => {
  return <>Profile</>;
};

export const ProfileWithAuth = withAuth(Profile)