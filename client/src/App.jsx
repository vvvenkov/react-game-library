import { Route, Routes } from 'react-router'
import { useState } from "react";

import Footer from './components/footer/footer'
import Home from './components/home/Home'
import Catalog from './components/catalog/Catalog'
import Details from './components/details/Details'
import Header from './components/header/Header'
import Create from './components/create/Create'
import Register from './components/register/Register'
import Login from './components/login/Login'


function App() {
	const [registeredUsers, setRegisteredUsers] = useState([]);
	const [user, setUser] = useState(null);

	const registerHandler = (email, password) => {
		if (registeredUsers.some(user => user.email === email)) {
			throw new Error('Username is taken! ')
		}

		setRegisteredUsers(state => [...state, { email, password }])

		//TODO: login user after register
	};

	const loginHandler = (email, password) => {
		const user = registeredUsers.find(u => u.email === email && u.password === password);
		if (!user) {
			throw new Error('Invalid username or password!')
		}

		setUser(user);
	}

	return (
		<>
			<Header user={user} />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/games" element={<Catalog />} />
				<Route path="/games/create" element={<Create />} />
				<Route path="/games/:gameId/details" element={<Details />} />
				<Route path="/users/register" element={<Register onRegister={registerHandler} />} />
				<Route path="/users/login" element={<Login onLogin={loginHandler} />} />
			</Routes >

			<Footer />

		</>
	)
}
export default App
