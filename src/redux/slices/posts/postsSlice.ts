import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { postType } from "./types";
import axios from "../../../utils/axios";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
    const { data } = await axios.get("/posts");
    return data;
});

export const createPost = createAsyncThunk(
    "posts/createPost",
    async (params: FormData) => {
        const { data } = await axios.post(`/posts`, params);
        return data;
    }
);

export const likePost = createAsyncThunk(
    "posts/likePost",
    async (postId: string | undefined) => {
        const { data } = await axios.post(`/posts/${postId}/like`);
        return data;
    }
);

export const getUserPosts = createAsyncThunk("posts/getUserPosts", async () => {
    const { data } = await axios.get(`/posts/user/me`);
    return data;
});

export const removePost = createAsyncThunk(
    "posts/removePost",
    async (id: string | undefined) => {
        //@ts-ignore
        const { data } = await axios.delete(`/posts/${id}`, id);
        return data;
    }
);

export const updatePost = createAsyncThunk(
    "posts/updatePost",
    async (updatedPost: FormData) => {
        const { data } = await axios.put(
            //@ts-ignore
            `/posts/${updatedPost.id}`,
            updatedPost
        );
        return data;
    }
);

const initialState = {
    posts: {
        items: [],
        status: "loading",
    },
    popularPosts: {
        items: [],
        status: "loading",
    },
    likes: {
        items: 0,
        status: "loading",
    },
    myPosts: [],
    freelancePosts: [],
    essentialsPosts: [],
    howNotToPosts: [],
    uiDesignPosts: [],
    uxDesignPosts: [],
    typographyPosts: [],
    seoPosts: [],
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //getPosts
        builder.addCase(getPosts.pending, (state) => {
            state.posts.items = [];
            state.popularPosts.items = [];
            state.posts.status = "loading";
        });
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.posts.items = action.payload.posts;
            state.popularPosts.items = action.payload.popularPosts;
            state.freelancePosts = action.payload.freelancePosts;
            state.howNotToPosts = action.payload.howNotToPosts;
            state.uiDesignPosts = action.payload.uiDesignPosts;
            state.uxDesignPosts = action.payload.uxDesignPosts;
            state.typographyPosts = action.payload.typographyPosts;
            state.essentialsPosts = action.payload.essentialsPosts;
            state.seoPosts = action.payload.seoPosts;
            state.posts.status = "loaded";
        });
        builder.addCase(getPosts.rejected, (state) => {
            state.posts.items = [];
            state.popularPosts.items = [];
            state.posts.status = "error";
        });

        //createPost
        builder.addCase(createPost.pending, (state) => {
            state.posts.status = "loading";
        });
        builder.addCase(createPost.fulfilled, (state, action) => {
            state.posts.status = "loaded";
            state.posts.items = action.payload;
        });
        builder.addCase(createPost.rejected, (state) => {
            state.posts.status = "error";
        });

        //removePost
        builder.addCase(removePost.pending, (state) => {
            state.posts.status = "loading";
        });
        builder.addCase(removePost.fulfilled, (state, action) => {
            state.posts.status = "loaded";
            state.posts.items = state.posts.items.filter(
                (post: postType) => post._id !== action.payload._id
            );
        });
        builder.addCase(removePost.rejected, (state) => {
            state.posts.status = "error";
        });
        //updatePost
        builder.addCase(updatePost.pending, (state) => {
            state.posts.status = "loading";
        });
        builder.addCase(updatePost.fulfilled, (state, action) => {
            state.posts.status = "loaded";
            const index = state.posts.items.findIndex(
                (post: postType) => post._id === action.payload._id
            );
            //@ts-ignore
            state.posts.items[index] = action.payload;
        });
        builder.addCase(updatePost.rejected, (state) => {
            state.posts.status = "error";
        });

        //getUserPosts
        builder.addCase(getUserPosts.pending, (state) => {
            state.posts.status = "loading";
        });
        builder.addCase(getUserPosts.fulfilled, (state, action) => {
            state.posts.status = "loaded";
            //@ts-ignore
            state.myPosts.push(action.payload);
        });
        builder.addCase(getUserPosts.rejected, (state) => {
            state.posts.status = "error";
        });

        //likePost
        builder.addCase(likePost.pending, (state) => {
            state.likes.status = "loading";
        });

        builder.addCase(likePost.fulfilled, (state, action) => {
            state.likes.status = "loaded";
            state.likes.items = action.payload.likes;
        });

        builder.addCase(likePost.rejected, (state) => {
            state.likes.status = "error";
        });
    },
});

export default postsSlice.reducer;
export const freelancePostsSelector = (state: RootState) =>
    state.postsSlice.freelancePosts;
