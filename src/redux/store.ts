import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth/authSlice";
import postsSlice from "./slices/posts/postsSlice";

export const store = configureStore({
    reducer: {
        authSlice,
        postsSlice
    }
})

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
