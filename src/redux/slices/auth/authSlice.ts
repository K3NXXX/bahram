import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialStateType, loginData, registerData } from "./types";
import { RootState } from "../../store";
import axios from "../../../utils/axios";

export const fetchRegister = createAsyncThunk(
    "auth/register",
    async (userData: registerData) => {
        try {
            const { data } = await axios.post(`auth/register`, userData);
            if (data.token) {
                window.localStorage.setItem("token", data.token);
            }
            return data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const fetchLogin = createAsyncThunk(
    "auth/login",
    async (userData: loginData) => {
        try {
            const { data } = await axios.post(`auth/login`, userData);
            if (data.token) {
                window.localStorage.setItem("token", data.token);
            }
            return data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const getMe = createAsyncThunk("auth/getMe", async () => {
    try {
        const { data } = await axios.get(`auth/getMe`);
        return data;
    } catch (error) {
        console.log(error);
    }
});

export const uploadAvatar = createAsyncThunk(
    "auth/uploadAvatar",
    async (params: FormData) => {
        try {
            const { data } = await axios.post(`auth/avatar`, params);
            return data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const deleteAvatar = createAsyncThunk("auth/deleteAvatar", async (a) => {
    try {
        const { data } = await axios.delete(`auth/avatar`);
        return data;
    } catch (error) {
        console.log(error);
    }
});

const initialState: initialStateType = {
    user: null,
    token: null,
    isLoading: false,
    status: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout(state) {
            state.isLoading = false;
            state.status = null;
            state.token = null;
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        //register
        builder.addCase(fetchRegister.pending, (state) => {
            state.isLoading = true;
            state.status = null;
        });
        builder.addCase(fetchRegister.fulfilled, (state, action) => {
            state.isLoading = false;
            state.status = action.payload.message;
            state.user = action.payload.user;
            state.token = action.payload.token;
        });
        builder.addCase(fetchRegister.rejected, (state) => {
            state.isLoading = false;
        });

        //login
        builder.addCase(fetchLogin.pending, (state) => {
            state.isLoading = true;
            state.status = null;
        });
        builder.addCase(fetchLogin.fulfilled, (state, action) => {
            state.isLoading = false;
            state.status = action.payload.message;
            state.user = action.payload.user;
            state.token = action.payload.token;
        });
        builder.addCase(fetchLogin.rejected, (state) => {
            state.isLoading = false;
        });

        //getMe
        builder.addCase(getMe.pending, (state) => {
            state.isLoading = true;
            state.status = null;
        });
        builder.addCase(getMe.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload?.user;
            state.token = action.payload?.token;
        });
        builder.addCase(getMe.rejected, (state) => {
            state.isLoading = false;
        });

        //uploadAvatar
        builder.addCase(uploadAvatar.pending, (state) => {
            state.isLoading = true;
            state.status = null;
        });
        builder.addCase(uploadAvatar.fulfilled, (state, action) => {
            //@ts-ignore
            state.user = {
                ...state.user,
                avatar: action.payload.user.avatar,
            };
            state.isLoading = false;
        });
        builder.addCase(uploadAvatar.rejected, (state) => {
            state.isLoading = false;
        });

        //deleteAvatar
        builder.addCase(deleteAvatar.pending, (state) => {
            state.isLoading = true;
            state.status = null;
        });
        builder.addCase(deleteAvatar.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.isLoading = false;
        });
        builder.addCase(deleteAvatar.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

export const { logout } = authSlice.actions;

export const checkIsAuth = (state: RootState) => Boolean(state.authSlice.token);

export default authSlice.reducer;
