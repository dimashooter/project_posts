import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../slices/postsSlice';
import postDetailsReducer from '../slices/postDetails';

export const store = configureStore({
	reducer: {
		posts: postsReducer,
		postDetails: postDetailsReducer,
	},
});
