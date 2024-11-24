import { useGLTF } from "@react-three/drei";
import { forwardRef, useRef } from "react";
import { handleSpin } from "../Objects";
import { useControls } from "leva";

export const Suzanne = forwardRef((props, ref) => {
	const { nodes, materials } = useGLTF("/models/suzanne.gltf");
	const localSuzanneRef = useRef();

	const { x, y, z, scale } = useControls("Suzanne", {
		x: { value: 0, min: -10, max: 10, step: 0.1 },
		y: { value: -2.189, min: -10, max: 10, step: 0.1 },
		z: { value: 0.043, min: -10, max: 10, step: 0.1 },
		scale: { value: 1, min: 0.05, max: 5, step: 0.1 },
	});

	const meshRef = ref || localSuzanneRef;

	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Suzanne.geometry}
				material={nodes.Suzanne.material}
				material-color='blue'
				position={[x, y, z]}
				scale={scale}
				ref={meshRef}
				onClick={() => handleSpin(meshRef)}
			/>
		</group>
	);
});
