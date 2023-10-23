import { MdSearch } from 'react-icons/md';

export const Search = () => {
	return (
		<div className='flex-col items-center mx-2 my-8 bg-white rounded shadow-xl sm:flex-row navbar'>
			<div className='w-3/5 my-3 navbar-start'>
				<MdSearch className='w-8 h-8 mx-2' />
				<input
					type='text'
					placeholder='Github Username'
					className='w-full max-w-2xl bg-white input input-primary input-bordered'
				/>
			</div>
			<div className='my-3 nav-center'>
				<button className='mx-10 btn btn-primary'>Search</button>
			</div>
			<div className='mx-2 my-3 navbar-end'>
				<h3 className='text-2xl'>Requests - 50/60</h3>
			</div>
		</div>
	);
};
