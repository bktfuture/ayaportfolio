import { NavLink, useLocation } from 'react-router-dom';

import React from 'react';

const Navbar = () => {
	const location = useLocation();
	const isHomePage = location.pathname === '/';

	return (
		<header className="header">
			<NavLink to="/" className="px-4 py-2 rounded-full bg-white items-center justify-center flex font-bold shadow-lg shadow-purple-500">
				<p className={`violet-gradient_text flex items-center text-lg`}>
					AYA.01
					{!isHomePage && (
						<span className="ml-2 text-purple-500 animate-pulse" role="img" aria-label="heart">
							💜
						</span>
					)}
				</p>
			</NavLink>
			<nav className="flex text-lg gap-7 font-medium">
				<NavLink to="/about" className={({ isActive }) => (isHomePage ? 'text-white' : isActive ? 'text-violet-500' : 'text-slate-500')}>
					About Me
				</NavLink>
				<NavLink to="/projects" className={({ isActive }) => (isHomePage ? 'text-white' : isActive ? 'text-violet-500' : 'text-slate-500')}>
					Projects
				</NavLink>
				<NavLink to="/contact" className={({ isActive }) => (isHomePage ? 'text-white' : isActive ? 'text-violet-500' : 'text-slate-500')}>
					Contact
				</NavLink>
			</nav>
		</header>
	);
};

export default Navbar;
