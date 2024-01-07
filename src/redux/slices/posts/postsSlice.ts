import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../../../utils/axios"

const getPosts = createAsyncThunk('posts/getPosts', async() => {
    const {data} = await axios.get('/posts')
    return data
})

const initialState = {
    posts: {
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
    }
})

export default postsSlice.reducer