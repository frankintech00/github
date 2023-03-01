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
		<section className='mt-10 sm:w-1/2'>
			<div className='relative m-2 bg-white rounded rounded-tl-none shadow-2xl'>
				<header className='absolute top-0 left-0 transform -translate-y-full bg-white rounded-t'>
					<h3 className='h-10 px-10 py-2 text-xl text-center text-black'>
						User
					</h3>
				</header>
				<div className='flex flex-col justify-center h-80'>
					<div className='flex flex-row items-center justify-between m-2'>
						<div className='flex flex-row items-center justify-between'>
							<div className='w-20 h-20 my-2 avatar'>
								<div className='w-24 rounded-full'>
									<img src={avatar_url} alt={name} />
								</div>
							</div>
							<div className='ml-4'>
								<h2 className='text-2xl font-bold text-black'>{name}</h2>
								<p className='text-gray-500'>
									@{twitter_username || 'John Doe'}
								</p>
							</div>
						</div>
						<button
							className='hidden px-10 my-5 btn btn-outline btn-primary btn-sm sm:block'
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
				</div>
			</div>
		</section>
	);
};
