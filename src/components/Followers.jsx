import { eventWrapper } from '@testing-library/user-event/dist/utils';
import { useContext } from 'react';
import { GithubContext } from '../context/context';

export const Followers = () => {
	const { followers } = useContext(GithubContext);

	return (
		<section className='mt-10 sm:w-1/2'>
			<div className='relative m-2 bg-white rounded rounded-tl-none shadow-2xl'>
				<header className='absolute top-0 left-0 transform -translate-y-full bg-white rounded-t'>
					<h3 className='h-10 px-10 py-2 text-xl text-center text-black'>
						Followers
					</h3>
				</header>
				<div className='flex flex-col justify-start pt-3 overflow-y-scroll h-80'>
					{followers.map((follower, index) => {
						const { avatar_url: img, html_url, login } = follower;
						return (
							<div
								key={login}
								className='flex flex-row items-center justify-start m-3'
							>
								<div className='w-10 h-10 my-2 avatar'>
									<div className='w-24 rounded-full'>
										<img src={img} alt={login} />
									</div>
								</div>
								<div className='ml-4'>
									<h4 className='text-xl text-black'>{login}</h4>
									<a href={html_url} className='link link-hover link-info'>
										Github Profile
									</a>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
