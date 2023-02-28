import { useContext } from 'react';
import { MdBusiness, MdLink, MdLocationOn } from 'react-icons/md';
import { GithubContext } from '../context/context';

export const Card = () => {
	const { githubUser } = useContext(GithubContext);
	const {
		avatar_url,
		html_url,
		name,
		company,
		blog,
		bio,
		location,
		twitter_username,
	} = githubUser;
	return (
		<section className='m-2 bg-white rounded shadow-2xl card md:w-1/2 h-96'>
			<h2 className='mx-3 mt-3 text-xl text-black'>User</h2>
			<div className='divider'></div>
			<div className='flex flex-row items-center justify-around mt-2'>
				<div className='flex flex-row items-center justify-between'>
					<div className='w-20 h-20 my-2 avatar'>
						<div className='w-24 rounded-full'>
							<img src={avatar_url} alt={name} />
						</div>
					</div>
					<div className='ml-4'>
						<h2 className='text-2xl font-bold text-black'>{name}</h2>
						<p className='text-gray-500'>@{twitter_username || 'John Doe'}</p>
					</div>
				</div>
				<button
					className='hidden px-10 my-5 sm:block btn btn-outline btn-primary btn-sm'
					onClick={() => (window.location.href = html_url)}
				>
					Follow
				</button>
			</div>

			<h3 className='m-4 text-xl text-black'>{bio}</h3>

			<div>
				<p className='flex items-center justify-start pl-3 space-x-2'>
					<MdBusiness />
					<span>{company}</span>
				</p>
			</div>
			<div>
				<p className='flex items-center justify-start pl-3 space-x-2'>
					<MdLocationOn />
					<span>{location || 'Here'}</span>
				</p>
			</div>
			<div>
				<a
					href={`https://${blog}`}
					className='flex items-center justify-start pl-3 mb-10 space-x-2'
				>
					<MdLink />
					<span>{blog}</span>
				</a>
			</div>
		</section>
	);
};
