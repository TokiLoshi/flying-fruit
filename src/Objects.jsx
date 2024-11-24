import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { forwardRef, useRef } from "react";
import * as THREE from "three";
import { useControls } from "leva";
import { Papaya } from "./components/Papaya";
import { Mango } from "./components/Mango";
import { Pitaya } from "./components/Pitaya";
import { Suzanne } from "./components/Suzanne";

export function handleSpin(ref) {
	console.log("clicked", ref.current);
	if (ref.current) {
		ref.current.rotation.z += 1;
	}
}

export default function Objects() {
	const scroll = useScroll();
	const { viewport, size } = useThree();

	// Object Refs
	const papayaRef = useRef();
	const mangoRef = useRef();
	const pitayaRef = useRef();
	const suzanneRef = useRef();

	useFrame(() => {
		const scrollFactor = viewport.height;
		papayaRef.current.position.y = 0 - scroll.offset * scrollFactor;
		mangoRef.current.position.y = THREE.MathUtils.lerp(
			-scrollFactor,
			-2 * scrollFactor,
			scroll.range(0.25, 0.25)
		);
		pitayaRef.current.position.y =
			-1 * scrollFactor - scroll.offset * scrollFactor;
		suzanneRef.current.position.y =
			-2 * scrollFactor - scroll.offset * scrollFactor;

		papayaRef.current.rotation.y = scroll.range(0, 0.25) * Math.PI * 2;
		// mangoRef.current.scale.setScalar(1 + scroll.range(0.25, 0.25) * 0.5);

		pitayaRef.current.rotation.z = scroll.range(0.5, 0.25) * Math.PI;
		suzanneRef.current.rotation.z = scroll.range(0.75, 0.25) * Math.PI;
	});
	// console.log("Mango: ", mangoRef.current.position);

	return (
		<>
			<group>
				<Papaya scale={0.5} ref={papayaRef} />
				<Mango scale={5} ref={mangoRef} />
				<Pitaya scale={1} ref={pitayaRef} />
				<Suzanne scale={1} ref={suzanneRef} />
			</group>
		</>
	);
}
