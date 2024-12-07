import { Html } from '@react-three/drei';
import React from 'react';

const Loader = () => {
	return (
		<Html>
			<div className="flex justify-center items-center">
				<div className="w-20 h-20 border-2 border-opacity-20 border-violet-600 border-t-violet-600 rounded-full animate-spin"></div>
			</div>
		</Html>
	);
};

export default Loader;
