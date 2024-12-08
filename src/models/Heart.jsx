import HeartScene from '../assets/3d/heart.glb';
import React from 'react';
import { useGLTF } from '@react-three/drei';

const Heart = ({ heartScale, heartPosition, isRotating }) => {
	const { scene } = useGLTF(HeartScene);

	return (
		<mesh>
			<primitive object={scene} scale={heartScale} position={heartPosition} isRotating={isRotating} />
		</mesh>
	);
};

export default Heart;
