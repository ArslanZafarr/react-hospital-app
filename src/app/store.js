import { configureStore } from "@reduxjs/toolkit";
// import LoginSliceReducer from "../features/auth/LoginSlice";
import { loginApi } from "../features/auth/loginApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import LoginReducer from "../features/auth/LoginSlice";
import { getProfileApi } from "../features/auth/getProfileApi";
import { LogoutApi } from "../features/auth/LogoutApi";

export const store = configureStore({
  reducer: {
    login: LoginReducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [getProfileApi.reducerPath]: getProfileApi.reducer,
    [LogoutApi.reducerPath]: LogoutApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(loginApi.middleware)
    .concat(getProfileApi.middleware)
    .concat(LogoutApi.middleware)
});

setupListeners(store.dispatch);
