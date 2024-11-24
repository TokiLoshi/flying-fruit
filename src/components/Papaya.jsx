import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { forwardRef, useRef } from "react";
import { handleSpin } from "../Objects";

export const Papaya = forwardRef((props, ref) => {
	const localPapayaRef = useRef();
	const meshRef = ref || localPapayaRef;
	const { x, y, z, scale } = useControls("Papaya", {
		x: { value: 3, min: -10, max: 10, step: 0.1 },
		y: { value: 2, min: -10, max: 10, step: 0.1 },
		z: { value: 1, min: -10, max: 10, step: 0.1 },
		scale: { value: 3, min: 0.1, max: 3, step: 0.1 },
	});

	useFrame((state) => {
		if (!ref) {
			meshRef.current.rotation.y = Math.sin(
				state.clock.elapsedTime + Math.random() * 0.01
			);
			meshRef.current.rotation.z = Math.cos(
				state.clock.elapsedTime + Math.random() * 0.01
			);
		}
	});

	const { nodes, materials } = useGLTF("/models/papaya-v1-transformed.glb");

	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.papaya.geometry}
				material={materials.skin}
				rotation={[-0.47, -0.369, 1.39]}
				position={[x, y, z]}
				material-color='orange'
				ref={meshRef}
				onClick={() => handleSpin(meshRef)}
			/>
		</group>
	);
});
