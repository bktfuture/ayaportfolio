import { About, Contact, Home, Projects } from './pages';
import React, { useEffect, useRef, useState } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import star1 from './assets/images/3dstar2.png';
import star2 from './assets/images/3dstar.png';

const App = () => {
	const backgroundRef = useRef(null);
	const location = useLocation();
	const [isHomePage, setIsHomePage] = useState(false);

	useEffect(() => {
		setIsHomePage(location.pathname === '/');
	}, [location.pathname]);

	useEffect(() => {
		if (!isHomePage && backgroundRef.current) {
			const background = backgroundRef.current;
			background.innerHTML = '';

			for (let i = 0; i < 300; i++) {
				const star = document.createElement('img');

				const isStar1 = Math.random() < 0.5;
				star.src = isStar1 ? star1 : star2;
				star.alt = 'Star';
				star.className = 'star';

				const x = Math.random() * 100;
				const size = Math.random() * 2 + 1;
				const animationDuration = Math.random() * 2 + 5;
				star.style.left = `${x}%`;
				star.style.width = `${size}rem`;
				star.style.height = `${size}rem`;

				star.style.animationDuration = `${animationDuration + 3}s`;
				star.style.animationDelay = `${Math.random() * 2}s`;

				background.appendChild(star);
			}
		}
	}, [isHomePage]);

	return (
		<div className="relative min-h-screen">
			{!isHomePage && <div ref={backgroundRef} className="absolute inset-0 bg-white z-0 overflow-hidden" aria-hidden="true"></div>}

			<main className="relative z-10">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />

					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</main>
		</div>
	);
};

const Root = () => (
	<Router>
		<App />
	</Router>
);

export default Root;
