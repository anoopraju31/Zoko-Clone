import { createSlice } from "@reduxjs/toolkit"

export const chooseSlice = createSlice({
    name: "choose",
    initialState: {
        value: [true, false, false, false]
    },
    reducers: {
        inputChoose: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { inputChoose } = chooseSlice.actions

export default chooseSlice.reducer