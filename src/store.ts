import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth";
import accountSlice from "./features/account";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    account: accountSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
