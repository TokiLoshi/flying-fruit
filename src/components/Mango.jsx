import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { forwardRef, useRef } from "react";

function handleSpin(ref) {
	console.log("clicked", ref.current);
	if (ref.current) {
		ref.current.rotation.x += 1;
	}
}

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
				ref={meshRef}
				scale={2}
				onClick={() => handleSpin(meshRef)}
				onPointerOver={() => (document.body.style.cursor = "pointer")}
				onPointerOut={() => (document.body.style.cursor = "default")}
			/>
		</group>
	);
});

useGLTF.preload("/models/mango-v1.glb");
