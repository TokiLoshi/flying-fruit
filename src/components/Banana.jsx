import React from "react";
import { useGLTF } from "@react-three/drei";

export function Banana(props) {
	const { nodes, materials } = useGLTF(
		"/models/bananaoptimized-transformed.glb"
	);
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.banana.geometry}
				material={materials.skin}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
		</group>
	);
}

useGLTF.preload("/bananaoptimized-transformed.glb");
