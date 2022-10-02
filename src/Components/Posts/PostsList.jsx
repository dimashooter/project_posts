import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../Redux/reducers';
import PostItem from './PostItem';

const PostsList = memo(() => {
	const dispatch = useDispatch();
	const { posts } = useSelector(state => state.posts);

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);
	return (
		<ul className="max-w-[900px] mx-auto">
			{posts?.map(post => {
				return <PostItem key={post.id} {...post} />;
			})}
		</ul>
	);
});

export default PostsList;
