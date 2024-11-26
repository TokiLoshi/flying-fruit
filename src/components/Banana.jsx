import React, { forwardRef, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

function handleSpin(ref) {
	console.log("Spin banana", ref);
	if (ref.current) {
		ref.current.rotation.z += 1;
	}
}

export const Banana = forwardRef((props, ref) => {
	const { nodes, materials } = useGLTF(
		"/models/bananaoptimized-transformed.glb"
	);
	const { x, y, z, scale } = useControls("Banana", {
		x: { value: 2, min: 0, max: 10, step: 0.1 },
		y: { value: 1, min: 0, max: 10, step: 0.1 },
		z: { vallue: 1, min: 0, max: 10, step: 0.1 },
		scale: { value: 1, min: 0.1, max: 5, step: 0.1 },
	});
	const localBananaRef = useRef();
	const meshRef = ref || localBananaRef;
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.banana.geometry}
				material={materials.skin}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={scale}
				ref={meshRef}
				onClick={() => handleSpin(meshRef)}
				onPointerOver={() => (document.body.style.cursor = "pointer")}
				onPointerOut={() => (document.body.style.cursor = "default")}
			/>
		</group>
	);
});

useGLTF.preload("/models/bananaoptimized-transformed.glb");
