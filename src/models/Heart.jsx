import React, { useRef } from 'react';

import HeartScene from '../assets/3d/heart.glb';
import { useActionData } from 'react-router-dom';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const Heart = ({ heartScale, heartPosition, isRotating }) => {
	const { scene } = useGLTF(HeartScene);
	const heartRef = useRef();

	const bounceSpeed = 2.6;
	const bounceHeight = 0.1;

	useFrame(({ clock }) => {
		console.log('heartRef.current:', heartRef.current);
		if (heartRef.current) {
			// Create a bouncing effect using a sine wave
			const time = clock.getElapsedTime(); // Get elapsed time
			heartRef.current.position.y = heartPosition[0] + Math.sin(time * bounceSpeed) * bounceHeight;
		}
	});
	return (
		<mesh ref={heartRef}>
			<primitive object={scene} scale={heartScale} position={heartPosition} isRotating={isRotating} />
		</mesh>
	);
};

export default Heart;
