import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

interface IPreloadedUserState {
  username: string | null;
  token: string | null;
}

const preloadedUserState: IPreloadedUserState = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user") || "")
  : { username: null, token: null };

const preloadedState: PreloadedState<any> = {
  user: {
    user: {
      username: preloadedUserState.username,
      token: preloadedUserState.token,
    },
    loading: false,
    error: null,
  },
};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
