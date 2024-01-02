import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth/authSlice";

export const store = configureStore({
    reducer: {
        authSlice,
    }
})

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
