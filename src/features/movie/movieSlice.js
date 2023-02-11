import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    popular: null, 
    hollywood: null,
    newTo: null, 
    original: null, 
    trending: null
}

const MovieReducer = createSlice({
    name: 'movie', 
    initialState, 
    reducers: {
        setDisneyMovie: ( state, action ) => {
            state.popular = action.payload.popular;
            state.hollywood = action.payload.hollywood;
            state.newTo = action.payload.newTo;
            state.original = action.payload.original;
            state.trending = action.payload.trending;
        }
    }
})

export const { setDisneyMovie } = MovieReducer.actions;

export const selectPopular = (state) => state.movie.popular;
export const selectHollywood = (state) => state.movie.hollywood;
export const selectNewTo = (state) => state.movie.newTo;
export const selectorOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;

export default MovieReducer.reducer;