import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deletePost } from '../../Redux/slices/postsSlice';

const PostItem = React.memo(({ id, title, body }) => {
	const dispatch = useDispatch();
	return (
		<li className="hover:bg-emerald-400 hover:text-white transition-all ease-in-out duration-500  flex justify-between items-center text-left p-3 border-2 border-emerald-400 my-2 rounded-md">
			<div>
				<h3 className="font-bold">{title}</h3>
			</div>
			<div className="flex gap-1">
				<button onClick={() => dispatch(deletePost(id))}>
					<AiOutlineCloseCircle size={30} />
				</button>
				<NavLink to={`/posts/${id}`} className="ml-1">
					<BsArrowRightCircle size={27} />
				</NavLink>
			</div>
		</li>
	);
});
export default PostItem;
