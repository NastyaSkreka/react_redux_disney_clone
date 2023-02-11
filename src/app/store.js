import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/movie/movieSlice'
import userSlice from '../features/user/userSlice';


export const Store = configureStore({
  reducer: {
    movie: movieReducer,
    user: userSlice
  },
});
