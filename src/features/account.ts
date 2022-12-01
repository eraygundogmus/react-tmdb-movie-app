import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

interface ProfileType {
  username: string;
  name: string;
  id: number;
  gravatarHash: string;
}

export interface AccountState {
  profile: ProfileType;
}

const initialState: AccountState = {
  profile: {
    username: "",
    name: "",
    id: 0,
    gravatarHash: "",
  },
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { setProfile } = accountSlice.actions;

export default accountSlice.reducer;
