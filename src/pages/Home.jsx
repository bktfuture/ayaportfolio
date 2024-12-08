import Bg from '../models/Bg';
import { Canvas } from '@react-three/fiber';
import Heart from '../models/Heart';
import Loader from '../components/Loader';
import React from 'react';
import Robot from '../models/Robot';
import { Suspense } from 'react';
import { useState } from 'react';

{
	/* <div className="abolute top-28 left-0 right-0 z-10 flex justify-center items-center">PPOOP</div> */
}

const Home = () => {
	const [isRotating, setIsRotating] = useState(false);
	const [currentStage, setCurrentStage] = useState(1);

	const adjustRobotForScreenSize = () => {
		let screenScale = null;
		let screenPosition = [0, -20, -43];
		let rotation = [0, 0, 0];
		if (window.innerWidth < 768) {
			screenScale = [8, 8, 8];
		} else {
			screenScale = [12, 12, 12];
		}
		return [screenScale, screenPosition, rotation];
	};

	const adjustHeartForScreenSize = () => {
		let screenScale, screenPosition;

		if (window.innerWidth < 768) {
			screenScale = [0.00009, 0.00009, 0.00009];
			screenPosition = [0, 1, 0];
		} else {
			screenScale = [0.0009, 0.0009, 0.0009];
			screenPosition = [0, 1.5, 0];
		}
		return [screenScale, screenPosition];
	};

	const [isRobotScale, isRobotPosition, isRobotRotation] = adjustRobotForScreenSize();
	const [heartScale, heartPosition] = adjustHeartForScreenSize();

	// const [isRobotScale, isRobotPosition, isRobotRotation] = [
	// 	[12, 12, 12],
	// 	[0, -17, -43],
	// 	[0, 0, 0],
	// ];

	return (
		<section className="w-full h-screen relative">
			<Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera={{ near: 0.1, far: 1000 }}>
				<Suspense fallback={<Loader />}>
					<directionalLight position={[1, 10, 1]} intensity={2} />
					<ambientLight intensity={0.6} />

					<hemisphereLight skyColor="#ffafcc" groundColor="#003049" intensity={2} />
					<Heart heartScale={heartScale} heartPosition={heartPosition} isRotating={isRotating} />
					<Bg />
					<Robot
						position={isRobotPosition}
						scale={isRobotScale}
						rotation={isRobotRotation}
						isRotating={isRotating}
						setIsRotating={setIsRotating}
						setCurrentStage={setCurrentStage}
					/>
				</Suspense>
			</Canvas>
		</section>
	);
};

export default Home;
