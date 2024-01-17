import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../../../utils/axios"

export const getPosts = createAsyncThunk('posts/getPosts', async() => {
    const {data} = await axios.get('/posts')
    return data
})

export const createPost = createAsyncThunk('posts/createPost', async(params:FormData) => {
    const {data} = await axios.post(`/posts`, params)
    return data
})

const initialState = {
    posts: {
        items: [],
        status: 'loading'
    },
    popularPosts: {
        items: [],
        status: 'loading'
    },
    tags: {
        items: [],
        status: 'loading'
    }
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        //getPosts
        builder.addCase(getPosts.pending, (state) => {
            state.posts.items = []
            state.popularPosts.items = []
            state.posts.status = 'loading'
        })
        builder.addCase(getPosts.fulfilled, (state,action) => {
            state.posts.items = action.payload.posts;
            state.popularPosts.items = action.payload.popularPosts;
            state.posts.status = 'loaded'
        })
        builder.addCase(getPosts.rejected, (state) => {
            state.posts.items = []
            state.popularPosts.items = []
            state.posts.status = 'error'
        })
        //createPost
        builder.addCase(createPost.pending, (state) => {
            state.posts.status = 'loading'
        })
        builder.addCase(createPost.fulfilled, (state,action) => {
            state.posts.status = 'loaded'
            state.posts.items = action.payload
        })
        builder.addCase(createPost.rejected, (state) => {
            state.posts.status = 'error'
        })
    }
})

export default postsSlice.reducer