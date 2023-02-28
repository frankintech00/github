// Importing the 'Link' component from the 'react-router-dom' library
import { Link } from 'react-router-dom';

// Defining a functional component called 'Error'
export const Error = () => {
	// The component returns a div containing a message and a button to navigate back to the home page
	return (
		<div className='flex items-center justify-center w-full h-screen px-16 bg-gray-200 md:px-0'>
			{/* A nested div that contains the message and the button */}
			<div className='flex flex-col items-center justify-center px-4 py-8 bg-white border border-gray-200 rounded-lg shadow-2xl md:px-8 lg:px-24'>
				{/* A message that displays the error code */}
				<p className='text-6xl font-bold tracking-wider text-gray-300 md:text-7xl lg:text-9xl'>
					404
				</p>
				{/* A message that displays the error message */}
				<p className='mt-4 text-2xl font-bold tracking-wider text-gray-500 md:text-3xl lg:text-5xl'>
					Page Not Found
				</p>
				{/* A message that displays a description of the error */}
				<p className='pb-4 my-4 text-center text-gray-500 border-b-2'>
					Sorry, the page you are looking for could not be found.
				</p>
				{/* A button that links to the home page */}
				<Link to='/'>
					<button className='btn btn-warning'>Back to Home</button>
				</Link>
			</div>
		</div>
	);
};
