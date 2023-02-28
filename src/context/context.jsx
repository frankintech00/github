// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MockFollowers from './mockData/MockFollowers';
import MockRepos from './mockData/MockRepos';
import MockUser from './mockData/MockUser';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
	const [githubUser, setGithubUser] = useState(MockUser);
	const [repos, setRepos] = useState(MockRepos);
	const [followers, setFollowers] = useState(MockFollowers);

	return (
		<GithubContext.Provider value={{ githubUser, repos, followers }}>
			{children}
		</GithubContext.Provider>
	);
};

export { GithubContext, GithubProvider };
