import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import postPage from "../../postPage/PostPage";

export const getPosts = createAsyncThunk(
    'get',
    async function(info,{dispatch, rejectWithValue}){
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await  response.json()
        dispatch(postsInfo(data))
    }
)

const postsSlice = createSlice({
    name:'postsSlice',
    initialState: {
        posts: []
    },
    reducers: {
        postsInfo:(state, action)=> {
            state.posts = action.payload
        }
    }
})
export const {postsInfo} = postsSlice.actions
export default postsSlice.reducer