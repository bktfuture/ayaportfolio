import { useEffect, useState } from 'react';

import Bg from '../models/Bg';
import { Canvas } from '@react-three/fiber';
import { FaHeadphones } from 'react-icons/fa';
import Heart from '../models/Heart';
import HomeInfo from '../components/HomeInfo';
import Loader from '../components/Loader';
import React from 'react';
import Robot from '../models/Robot';
import { Suspense } from 'react';
import { TbHeadphonesOff } from 'react-icons/tb';
import chill from '../assets/chill.mp3';
import soundoff from '../assets/icons/sounoff.svg';
import soundon from '../assets/icons/soundon.svg';
import { useRef } from 'react';

const Home = () => {
	const audioRef = useRef(new Audio(chill));
	audioRef.current.volume = 0.4;
	audioRef.current.loop = true;

	const [isRotating, setIsRotating] = useState(false);
	const [currentStage, setCurrentStage] = useState(1);
	const [isPlayingMusic, setIsPlayingMusic] = useState(false);

	useEffect(() => {
		if (isPlayingMusic) {
			audioRef.current.play();
		}

		return () => {
			audioRef.current.pause();
		};
	}, [isPlayingMusic]);

	const adjustRobotForScreenSize = () => {
		let screenScale = null;
		let screenPosition = [0, -10, -43];
		let rotation = [0, 0, 0];
		if (window.innerWidth < 768) {
			screenScale = [7.6, 7.6, 7.6];
		} else {
			screenScale = [9.6, 9.6, 9.6];
		}
		return [screenScale, screenPosition, rotation];
	};

	const adjustHeartForScreenSize = () => {
		let screenScale, screenPosition;

		if (window.innerWidth < 768) {
			screenScale = [0.00009, 0.00009, 0.00009];
			screenPosition = [0, 1, 0];
		} else {
			screenScale = [0.0006, 0.0006, 0.0006];
			screenPosition = [0, 2.3, 0];
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
			<div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20 flex justify-center items-center">
				{currentStage && <HomeInfo currentStage={currentStage} />}
			</div>
			<Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera={{ near: 0.1, far: 1000 }}>
				<Suspense fallback={<Loader />}>
					<directionalLight position={[1, 10, 1]} intensity={2} />
					<ambientLight intensity={0.6} />

					<hemisphereLight skyColor="#ffafcc" groundColor="#003049" intensity={2} />
					<Heart heartScale={heartScale} heartPosition={heartPosition} isRotating={isRotating} />
					<Bg isRotating={isRotating} setIsRotating={setIsRotating} setCurrentStage={setCurrentStage} />
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

			<div className="absolute bottom-2 left-2">
				{isPlayingMusic ? (
					<FaHeadphones className="w-10 h-10 text-white cursor-pointer object-contain" onClick={() => setIsPlayingMusic(false)} />
				) : (
					<TbHeadphonesOff className="w-10 h-10 text-white cursor-pointer object-contain" onClick={() => setIsPlayingMusic(true)} />
				)}
			</div>
		</section>
	);
};

export default Home;
