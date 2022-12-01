import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  isLoggedIn: boolean;
  token: string;
  sessionId: string;
  athorizedRequestToken: string;
}

const initialState: AuthState = {
  isLoggedIn: false,
  token: "",
  sessionId: "",
  athorizedRequestToken: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setSessionId: (state, action) => {
      state.sessionId = action.payload;
    },
    setAthorizedRequestToken: (state, action) => {
      state.athorizedRequestToken = action.payload;
    },
  },
});

export const {
  login,
  logout,
  setToken,
  setSessionId,
  setAthorizedRequestToken,
} = authSlice.actions;

export default authSlice.reducer;
