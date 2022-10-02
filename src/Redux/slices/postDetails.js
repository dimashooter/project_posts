import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	details: [],
	isLoading: false,
	error: '',
};

export const postDetails = createSlice({
	name: 'details',
	initialState,
	reducers: {
		detailsFetching(state) {
			state.isLoading = true;
		},
		detailsFetchingSuccess(state, action) {
			state.details = action.payload;
			state.error = '';
			state.isLoading = false;
		},
		detailsFetchingError(state, action) {
			state.error = action.payload;
			state.isLoading = false;
		},
	},
});
export const { detailsFetching, detailsFetchingError, detailsFetchingSuccess } = postDetails.actions;

export default postDetails.reducer;
