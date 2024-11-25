import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { forwardRef, useRef } from "react";
import { handleSpin } from "../Objects";

export const Mango = forwardRef((props, ref) => {
	const { nodes, materials } = useGLTF("/models/mango-v1.glb");

	const localMangoRef = useRef();
	const meshRef = ref || localMangoRef;

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

	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.mango.geometry}
				material={materials.skin}
				rotation={[-1.821, 0.017, -0.072]}
				// position={[x, y, z]}
				ref={meshRef}
				// scale={5}
				onClick={() => handleSpin(meshRef)}
			/>
		</group>
	);
});

useGLTF.preload("/mango-v1.glb");
