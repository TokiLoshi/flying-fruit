import React from "react";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

export function Banana(props) {
	const { nodes, materials } = useGLTF(
		"/models/bananaoptimized-transformed.glb"
	);
	const { x, y, z, scale } = useControls("Banana", {
		x: { value: 2, min: 0, max: 10, step: 0.1 },
		y: { value: 1, min: 0, max: 10, step: 0.1 },
		z: { vallue: 1, min: 0, max: 10, step: 0.1 },
		scale: { value: 1, min: 0.1, max: 5, step: 0.1 },
	});
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.banana.geometry}
				material={materials.skin}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={scale}
			/>
		</group>
	);
}

useGLTF.preload("/models/bananaoptimized-transformed.glb");
