import React, { useContext } from 'react';

import { GithubContext } from '../context/context';

export const Info = () => {
	const data = useContext(GithubContext);
	console.log(data);

	return <div>Info</div>;
};
