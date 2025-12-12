import { Route, Routes } from 'react-router'

import Footer from './components/footer/footer'
import Home from './components/home/Home'
import Catalog from './components/catalog/Catalog'
import Details from './components/details/Details'
import Header from './components/header/Header'
import Create from './components/create/Create'
import Register from './components/register/Register'
import Login from './components/login/Login'

function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/games" element={<Catalog />} />
				<Route path="/games/create" element={<Create />} />
				<Route path="/games/:gameId/details" element={<Details />} />
				<Route path="/users/register" element={<Register />} />
				<Route path="/users/login" element={<Login />} />
			</Routes >

			<Footer />

		</>
	)
}
export default App
