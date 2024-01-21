import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createCommentData } from "./types";
import axios from "../../../utils/axios";

export const createComment = createAsyncThunk(
    "comments/createComment",
    async (params: createCommentData) => {
        const { id } = params;
        const { data } = await axios.post(`/comments/${id}`, params);
        console.log(params);
        return data;
    }
);

export const getPostComments = createAsyncThunk(
    "comments/getPostComments",
    async (id: string) => {
        const { data } = await axios.get(`/posts/comments/${id}`);
        return data;
    }
);

export const deleteComment = createAsyncThunk(
    "comments/deleteComment",
    async (id: string | undefined) => {
        const { data } = await axios.delete(`/posts/comments/${id}`);
        return data;
    }
);

const initialState = {
    comments: [],
    loading: false,
};

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //createComment
        builder.addCase(createComment.pending, (state) => {
            state.loading = false;
        });
        builder.addCase(createComment.fulfilled, (state, action) => {
            state.loading = true;
            //@ts-ignore
            state.comments.push(action.payload);
        });
        builder.addCase(createComment.rejected, (state) => {
            state.loading = false;
        });

        //getAll
        builder.addCase(getPostComments.pending, (state) => {
            state.loading = false;
        });
        builder.addCase(getPostComments.fulfilled, (state, action) => {
            state.loading = true;
            //@ts-ignore
            state.comments = action.payload;
        });
        builder.addCase(getPostComments.rejected, (state) => {
            state.loading = false;
        });
        //delete
        builder.addCase(deleteComment.pending, (state) => {
            state.loading = false;
        });
        builder.addCase(deleteComment.fulfilled, (state, action) => {
            state.loading = true;
            //@ts-ignore
            state.comments = action.payload;
        });
        builder.addCase(deleteComment.rejected, (state) => {
            state.loading = false;
        });
    },
});

export default commentsSlice.reducer;
