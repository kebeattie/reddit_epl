import { configureStore } from '@reduxjs/toolkit';
import redditReducer from '../features/reddit/redditSlice';

export const store = configureStore({
  reducer: {
    reddit: redditReducer,
  },
});
