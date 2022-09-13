import { createAction } from "@reduxjs/toolkit";

export const setAuthState = createAction("@user/setAuthState")
export const setUserData = createAction("@user/setUserData")
export const clearUserData = createAction("@user/clearUserData")

export const authAction = createAction("@user/authMiddleware")
export const registrationAction = createAction("@user/registrationMiddleware")

export const setPage = createAction("@ui/setPage");
