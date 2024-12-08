import { NavLink } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
	return (
		<header className="header">
			<NavLink to="/" className="w-20 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
				<p className="violet-gradient_text">AYA.01</p>
			</NavLink>
			<nav className="flex text-lg gap-7 font-medium">
				<NavLink to="/about" className={({ isActive }) => (isActive ? 'text-violet-500' : 'text-white')}>
					About
				</NavLink>
				<NavLink to="/projects" className={({ isActive }) => (isActive ? 'text-violet-500' : 'text-white')}>
					Projects
				</NavLink>
			</nav>
		</header>
	);
};

export default Navbar;
