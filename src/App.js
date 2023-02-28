import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthWrapper, DashBoard, Error, Login, PrivateRoute } from './pages';

export const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<DashBoard />}></Route>
				<Route path='/login' element={<Login />}></Route>
				<Route path='*' element={<Error />}></Route>
			</Routes>
		</Router>
	);
};
