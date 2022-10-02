import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
	posts: [],
	isLoading: false,
	error: null,
};

export const deletePost = createAsyncThunk('posts/deleteTPost', async function (id, { rejectWithValue, dispatch }) {
	try {
		const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
			method: 'DELETE',
		});

		if (!response.ok) {
			throw new Error("Can't delete task. Server error.");
		}
		dispatch(removePost({ id }));
	} catch (error) {
		return rejectWithValue(error.message);
	}
});

export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		postsFetching(state, { payload }) {
			state.isLoading = true;
			state.error = null;
		},
		postsFetchingSuccess(state, { payload }) {
			state.posts = payload;
			state.isLoading = false;
		},
		postsFetchingError(state, { payload }) {
			state.isLoading = false;
			state.error = payload;
		},
		removePost(state, action) {
			state.posts = state.posts.filter(post => post.id !== action.payload.id);
			state.isLoading = false;
		},
	},
	extraReducers: {
		[deletePost.pending]: state => {
			state.isLoading = true;
		},
	},
});
export const { removePost, postsFetching, postsFetchingSuccess, postsFetchingError } = postsSlice.actions;

export default postsSlice.reducer;
