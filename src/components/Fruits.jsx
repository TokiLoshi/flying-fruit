import { useIntersect } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { Mango } from "./Mango";
import { Papaya } from "./Papaya";
import { Pitaya } from "./Pitaya";
import { Suzanne } from "./Suzanne";
import { Banana } from "./Banana";

export function Fruits() {
	const { height, width } = useThree((state) => state.viewport);
	return (
		<>
			<pointLight color='blue' position={[8, -24, 5]} intensity={20} />
			<pointLight
				color='red'
				position={[0, -height * 2.25, 5]}
				intensity={10}
			/>
			{/* First page Papaya */}
			<FruitItem position={[0, 0, 0]}>
				<Papaya scale={0.5} />
			</FruitItem>
			{/* Second page Pitaya */}
			<FruitItem position={[width / 6, -height * 1, 0]}>
				<Pitaya scale={1} />
			</FruitItem>
			{/* Third page Mango */}
			<FruitItem position={[-width / 5, -height * 1.8, -2]}>
				<Mango scale={5} />
			</FruitItem>
			{/* Fourth Page mango */}
			<FruitItem position={[width / 4, -height * 2, 0]}>
				<Mango scale={5} />
			</FruitItem>
			<FruitItem position={[-width / 12, -height * 2.25, 0.5]}>
				<Mango scale={5} />
			</FruitItem>
			<FruitItem position={[-width / 14, -height * 3.25, 0.5]}>
				<Banana scale={0.5} />
			</FruitItem>
		</>
	);
}

function FruitItem({ position, children }) {
	const visible = useRef();
	const ref = useIntersect((isVisible) => (visible.current = visible));
	const [xRandomFactor, yRandomFactor] = useMemo(
		() => [(0.5 - Math.random()) * 0.5, (0.5 - Math.random()) * 0.5],
		[]
	);
	useFrame(({ clock }, delta) => {
		const elapsedTime = clock.getElapsedTime();
		ref.current.rotation.x = elapsedTime * xRandomFactor;
		ref.current.rotation.y = elapsedTime * yRandomFactor;
		const scale = THREE.MathUtils.damp(
			ref.current.scale.x,
			visible.current ? 1.5 : 0.2,
			5,
			delta
		);
		// ref.current.scale.set(scale, scale, scale);
	});
	return (
		<group ref={ref} position={position}>
			{children}
		</group>
	);
}
