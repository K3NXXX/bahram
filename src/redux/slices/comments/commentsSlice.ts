import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../../../utils/axios"


export const createComment = createAsyncThunk('comments/createComment', async(postId, comment) => {
    const {data} = await axios.post(`/comments/${postId}`)
    return data
})

const initialState = {
    comments: [],
    loading: false,
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
     
        //createPost
        builder.addCase(createComment.pending, (state) => {
            state.loading = false
        })
        builder.addCase(createComment.fulfilled, (state,action) => {
            state.loading = true
            //@ts-ignore
            state.comments.push(action.payload) 
        })
        builder.addCase(createComment.rejected, (state) => {
            state.loading = false
        })
    }
})

export default commentsSlice.reducer