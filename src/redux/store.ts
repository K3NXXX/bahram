import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth/authSlice";
import postsSlice from "./slices/posts/postsSlice";
import commentsSlice from "./slices/comments/commentsSlice";

export const store = configureStore({
    reducer: {
        authSlice,
        postsSlice,
        commentsSlice,
    },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
