import axios from 'axios';
import { detailsFetching, detailsFetchingError, detailsFetchingSuccess } from '../slices/postDetails';
import { postsFetching, postsFetchingError, postsFetchingSuccess } from '../slices/postsSlice';

export const fetchDetails = id => async dispatch => {
	try {
		dispatch(detailsFetching());
		const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
		dispatch(detailsFetchingSuccess(response.data));
	} catch (error) {
		dispatch(detailsFetchingError(error.message));
	}
};

export const fetchPosts =
	(limit = 10) =>
	async dispatch => {
		try {
			dispatch(postsFetching());
			const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
				params: {
					_limit: limit,
				},
			});
			dispatch(postsFetchingSuccess(response.data));
		} catch (error) {
			dispatch(postsFetchingError(error.message));
		}
	};
