import { About, Contact, Home, Projects } from './pages';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import React from 'react';

const App = () => {
	const location = useLocation();

	// Check if the current page is the Contact page
	const isContactPage = location.pathname === '/contact';

	return (
		<main className={`min-h-screen ${isContactPage ? 'bg-purple-500' : 'bg-slate-300/200'} transition-colors duration-300`}>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</main>
	);
};

const Root = () => (
	<Router>
		<App />
	</Router>
);

export default Root;
