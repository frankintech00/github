// Importing the 'githubuser' SVG image from the '../assets/images' directory
import githubuser from '../assets/images/githubuser.svg';

// Defining a functional component called 'Login'
export const Login = () => {
	// The component returns a div containing an image, a heading, and a button
	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			{/* The image component displaying the 'githubuser' SVG */}
			<img src={githubuser} alt='GitHub User' className='w-3/5 h-2/5' />
			{/* The heading component */}
			<h1 className='my-3 text-4xl md:text-6xl'>Github User</h1>
			{/* The button component */}
			<button className='my-3 btn btn-primary btn-sm md:btn-lg'>Login</button>
		</div>
	);
};
