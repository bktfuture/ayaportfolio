import CosmosScene from '../assets/3d/cosmos.glb';
import React from 'react';
import ShipScene from '../assets/3d/skyship.glb';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';

const Bg = ({ isRotating }) => {
	const ship = useGLTF(ShipScene);
	const shipRef = useRef();

	useFrame((_, delta) => {
		if (isRotating) {
			shipRef.current.rotation.y += 0.8 * delta;
		}
	});

	return (
		<mesh ref={shipRef}>
			<primitive object={ship.scene} />
		</mesh>
	);
};

export default Bg;
