import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies", 
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies: (State, action) => {
            State.nowPlayingMovies = action.payload;
        },

        addPopluarMovies: (state, action) => {
            state.popluarMovies = action.payload;
        },

        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },

        addUpComingMovies: (state, action) => {
            state.upComingMovies = action.payload;
        },

        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
    },
});


export const { addNowPlayingMovies, addTrailerVideo, addPopluarMovies, addTopRatedMovies, addUpComingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;