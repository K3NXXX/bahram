import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../../../utils/axios"
import { createCommentData, getAllCommentsType } from "./types"


export const createComment = createAsyncThunk('comments/createComment', async(params:createCommentData) => {
    const { id} = params;
    const {data} = await axios.post(`/comments/${id}`, params)
    console.log(params)
    return data
})

export const getAllComments = createAsyncThunk('comments/getAllComments', async(id:getAllCommentsType) => {
    const {data} = await axios.get(`/posts/comments/${id}`)
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
     
        //createComment
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

        //getAll
        builder.addCase(getAllComments.pending, (state) => {
            state.loading = false
        })
        builder.addCase(getAllComments.fulfilled, (state,action) => {
            state.loading = true
            //@ts-ignore
            state.comments = action.payload
        })
        builder.addCase(getAllComments.rejected, (state) => {
            state.loading = false
        })
    }
})

export default commentsSlice.reducer