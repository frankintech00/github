import { Card } from './Card';
import { Followers } from './Followers';

export const User = () => {
	return (
		<div className='flex flex-col md:flex-row'>
			<Card />
			<Followers />
		</div>
	);
};
