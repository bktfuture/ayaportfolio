import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import React from 'react';
import Robot from '../models/3d/Robot';
import { Suspense } from 'react';

{
	/* <div className="abolute top-28 left-0 right-0 z-10 flex justify-center items-center">PPOOP</div> */
}

const Home = () => {
	return (
		<section className="w-full h-screen relative">
			<Canvas className="w-full h-screen bg-transparent" camera={{ near: 0.1, far: 1000 }}>
				<Suspense fallback={<Loader />}>
					<directionalLight />
					<ambientLight />
					<pointLight />
					<spotLight />
					<hemisphereLight />
					<Robot />
				</Suspense>
			</Canvas>
		</section>
	);
};

export default Home;
