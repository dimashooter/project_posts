import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import Loader from './Components/Loader/Loader';
import { Details, Posts } from './Pages';

function App() {
	const { isLoading, error } = useSelector(state => state.posts);

	return (
		<div className="max-w-[900px] mx-auto text-center p-5">
			{isLoading && <Loader />}
			{error && <h2 className="font-bold text-xl">Error occured: {error}</h2>}
			<Routes>
				<Route index path="/" element={<Posts />} />
				<Route path="/posts/:id" element={<Details />} />
			</Routes>
		</div>
	);
}

export default App;
