import { Info, Navbar, Repos, Search, User } from '../components';
import { GithubContext } from '../context/context';

export const DashBoard = () => {
	return (
		<main className='w-full mx-auto md:w-4/5'>
			{/* <Navbar /> */}
			{/* <Search /> */}
			<Info />
			<User />
			<Repos />
		</main>
	);
};
