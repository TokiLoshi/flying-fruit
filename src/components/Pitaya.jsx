import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { forwardRef, useRef } from "react";
import { handleSpin } from "../Objects";
import { useControls } from "leva";

export const Pitaya = forwardRef((props, ref) => {
	const localPitayaRef = useRef();
	const meshRef = ref || localPitayaRef;

	const { x, y, z, scale } = useControls("Pitaya", {
		x: { value: 2.5, min: -10, max: 10, step: 0.1 },
		y: { value: 0, min: -10, max: 10, step: 0.1 },
		z: { value: 0, min: -10, max: 10, step: 0.1 },
		scale: { value: 1, min: 0.5, max: 5 },
	});

	useFrame((state) => {
		meshRef.current.rotation.x = Math.sin(
			state.clock.elapsedTime + Math.random() * 0.01
		);
		meshRef.current.rotation.y = Math.cos(
			state.clock.elapsedTime + Math.random() * 0.01
		);
	});
	const { nodes, materials } = useGLTF("/models/pitaya-v1-transformed.glb");
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.pitaya.geometry}
				material={materials.skin}
				rotation={[3.114, 0, 0]}
				position={[x, y, z]}
				scale={scale}
				ref={meshRef}
				onClick={() => handleSpin(meshRef)}
			/>
		</group>
	);
});
useGLTF.preload("/models/pitaya-v1-transformed.glb");