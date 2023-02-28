import { Info, Navbar, Repos, Search, User } from '../components';
import { GithubContext } from '../context/context';

export const DashBoard = () => {
	return (
		<main>
			<Navbar />
			<Search />
			<Info />
			<User />
			<Repos />
		</main>
	);
};
