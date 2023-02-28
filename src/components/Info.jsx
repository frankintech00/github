import React, { useContext } from 'react';
import { FiUserPlus, FiUsers } from 'react-icons/fi';
import { GoGist, GoRepo } from 'react-icons/go';
import { Item } from '../components';
import { GithubContext } from '../context/context';

export const Info = () => {
	const { githubUser } = useContext(GithubContext);
	const { public_repos, followers, following, public_gists } = githubUser;
	console.log(public_repos);

	const items = [
		{
			id: 1,
			icon: <GoRepo />,
			label: 'repos',
			value: public_repos,
			background: '#ffe0f0',
			color: '#da4a91',
		},
		{
			id: 2,
			icon: <FiUsers />,
			label: 'followers',
			value: followers,
			background: '#e6e6ff',
			color: '#5d55fa',
		},
		{
			id: 3,
			icon: <FiUserPlus />,
			label: 'following',
			value: following,
			background: '#fffbea',
			color: '#f0b429',
		},
		{
			id: 4,
			icon: <GoGist />,
			label: 'gists',
			value: public_gists,
			background: '#e0fcff',
			color: '#2caeba',
		},
	];

	return (
		<div>
			<section className='flex flex-wrap'>
				{items.map((item) => {
					return <Item key={item.id} {...item} />;
				})}
			</section>
		</div>
	);
};
