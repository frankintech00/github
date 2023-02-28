import githubuser from '../assets/images/githubuser.svg';

export const Login = () => {
	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<img src={githubuser} alt='GitHub User' className='w-3/5 h-2/5' />
			<h1 className='my-3 text-4xl md:text-6xl'>Github User</h1>
			<button className='my-3 btn btn-primary btn-sm md:btn-lg'>Login</button>
		</div>
	);
};
