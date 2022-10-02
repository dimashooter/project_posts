import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { fetchDetails } from '../../Redux/reducers';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import Loader from '../Loader/Loader';
const PostDetailsComponent = () => {
	const { id } = useParams();
	const nav = useNavigate();
	const dispatch = useDispatch();
	const { details, isLoading, error } = useSelector(state => state.postDetails);

	useEffect(() => {
		dispatch(fetchDetails(id));
	}, [dispatch]);
	return (
		<>
			{isLoading && <Loader />}
			{error && <h2>Ошибка</h2>}
			<div className="text-left">
				<button className="p-2 bg-black text-white rounded-md flex gap-1 items-center" onClick={() => nav(-1)}>
					<MdOutlineKeyboardBackspace />
					<span>Back</span>
				</button>
				<img className="block my-2" src={`https://picsum.photos/id/${id}/200`} alt="" />
				<h3
					className="first-letter:text-5xl first-letter:font-bold first-letter:text-slate-900
 ">
					{details.title}
				</h3>
				<p className="font-bold">{details.body}</p>
			</div>
		</>
	);
};

export default PostDetailsComponent;
