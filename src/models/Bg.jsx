import CosmosScene from '../assets/3d/cosmos.glb';
import React from 'react';
import ShipScene from '../assets/3d/skyship.glb';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';

const Bg = ({ isRotating, setIsRotating, setCurrentStage }) => {
	const ship = useGLTF(ShipScene);
	const shipRef = useRef();

	const previousStage = useRef(null); // Track the previous stage to prevent redundant updates

	useFrame((_, delta) => {
		if (shipRef.current) {
			// Rotate the ship if isRotating is true
			if (isRotating) {
				shipRef.current.rotation.y += 0.8 * delta; // Rotation speed
			}

			// Normalize the rotation to [0, 2π]
			const rotation = shipRef.current.rotation.y;
			const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

			// Determine the stage
			const totalStages = 4; // Define the number of stages
			const stageWidth = (2 * Math.PI) / totalStages; // Size of each stage in radians
			const currentStage = Math.floor(normalizedRotation / stageWidth) + 1;

			// Update stage only if it changes
			if (currentStage !== previousStage.current) {
				previousStage.current = currentStage;
				setCurrentStage(currentStage); // Inform the parent component of the current stage
				console.log(`Stage changed to: ${currentStage}`);
			}
		}
	});

	return (
		<mesh ref={shipRef}>
			<primitive object={ship.scene} />
		</mesh>
	);
};

export default Bg;
