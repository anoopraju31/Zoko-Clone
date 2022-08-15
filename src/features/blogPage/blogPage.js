import { createSlice } from "@reduxjs/toolkit"

export const blogPageSlice = createSlice({
    name: "blogPage",
    initialState: {
        value: 1
    },
    reducers: {
        inputBlogPage: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { inputBlogPage } = blogPageSlice.actions

export default blogPageSlice.reducer