import { About, Contact, Home, Projects } from './pages';
import React, { useEffect, useRef } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import star1 from './assets/images/3dstar2.png';
import star2 from './assets/images/3dstar.png';

const App = () => {
	const backgroundRef = useRef(null);

	useEffect(() => {
		const background = backgroundRef.current;

		if (background) {
			background.innerHTML = '';

			for (let i = 0; i < 200; i++) {
				const star = document.createElement('img');

				const isStar1 = Math.random() < 0.5;
				star.src = isStar1 ? star1 : star2;
				star.alt = 'Star';
				star.className = 'absolute w-8 h-8';

				const x = Math.random() * 100;
				const y = Math.random() * 100;

				star.style.left = `${x}%`;
				star.style.top = `${y}%`;

				const size = Math.random() * 2 + 1;
				star.style.width = `${size}rem`;
				star.style.height = `${size}rem`;

				background.appendChild(star);
			}
		}
	}, []);

	return (
		<div className="relative min-h-screen">
			<div ref={backgroundRef} className="absolute inset-0 bg-white z-0 overflow-hidden" aria-hidden="true"></div>

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
