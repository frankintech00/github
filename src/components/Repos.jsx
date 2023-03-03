import { useContext } from 'react';
import { GithubContext } from '../context/context';

import { Bar3D, Column3D, Doughnut2D, Pie3D } from './Charts';

export const Repos = () => {
	const { repos } = useContext(GithubContext);
	console.log(repos);

	const languages = repos.reduce((total, item) => {
		const { language, stargazers_count } = item;
		if (!language) return total;
		if (!total[language]) {
			total[language] = { label: language, value: 1, stars: stargazers_count };
		} else {
			total[language] = {
				...total[language],
				value: total[language].value + 1,
				stars: total[language].stars + stargazers_count,
			};
		}
		return total;
	}, {});

	const mostUsed = Object.values(languages)
		.sort((a, b) => {
			return b.value - a.value;
		})
		.slice(0, 5);

	const mostPopular = Object.values(languages)
		.sort((a, b) => {
			return b.stars - a.stars;
		})
		.map((item) => {
			return { ...item, value: item.stars };
		})
		.slice(0, 5);

	let { stars, forks } = repos.reduce(
		(total, item) => {
			const { stargazers_count, name, forks } = item;
			total.stars[stargazers_count] = {
				label: name,
				value: stargazers_count,
			};
			total.forks[forks] = { label: name, value: forks };
			return total;
		},
		{
			stars: {},
			forks: {},
		}
	);

	stars = Object.values(stars).slice(-5).reverse();
	forks = Object.values(forks).slice(-5).reverse();

	return (
		<div className='flex flex-col flex-wrap sm:flex-row'>
			<Column3D data={stars} />
			<Pie3D data={mostUsed} />
			<Doughnut2D data={mostPopular} />
			<Bar3D data={forks} />
		</div>
	);
};
