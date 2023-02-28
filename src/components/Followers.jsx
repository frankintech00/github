import { useContext } from 'react';
import { GithubContext } from '../context/context';

export const Followers = () => {
	const { followers } = useContext(GithubContext);

	return (
		<section className='m-2 overflow-scroll bg-white rounded shadow-2xl card md:w-1/2 h-96'>
			<h2 className='mx-3 mt-3 text-xl text-black '>Followers</h2>
			<div className='divider'></div>
			<div className='mt-2'>
				{followers.map((follower, index) => {
					const { avatar_url: img, html_url, login } = follower;
					return (
						<div className='flex flex-row items-center justify-start ml-3'>
							<div className='w-20 h-20 my-2 avatar'>
								<div className='w-24 rounded-full'>
									<img src={img} alt={login} />
								</div>
							</div>
							<div className='ml-4'>
								<h4 className='text-2xl font-bold text-black'>{login}</h4>
								<a href={html_url}>{html_url}</a>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};
