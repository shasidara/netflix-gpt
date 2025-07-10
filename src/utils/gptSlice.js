import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptView: false,
    },
    reducers: {
        toggleGptSearch: (state) => {
            state.showGptView = !state.showGptView;
        },
    },
});


export const { toggleGptSearch } = gptSlice.actions;
export default gptSlice.reducer;