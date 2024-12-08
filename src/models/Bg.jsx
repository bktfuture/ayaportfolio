import CosmosScene from '../assets/3d/cosmos.glb';
import React from 'react';
import ShipScene from '../assets/3d/skyship.glb';
import { useGLTF } from '@react-three/drei';

const Bg = () => {
	const ship = useGLTF(ShipScene);

	return (
		<mesh>
			<primitive object={ship.scene} />
		</mesh>
	);
};

export default Bg;
