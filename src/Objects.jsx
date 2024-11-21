import { useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

function handleSpin(ref) {
	console.log("clicked", ref.current);
	if (ref.current) {
		ref.current.rotation.z += 1;
	}
}

function Box() {
	const boxRef = useRef();
	useFrame((state) => {
		boxRef.current.rotation.x = Math.sin(
			state.clock.elapsedTime + Math.random() * 0.01
		);
		boxRef.current.rotation.y = Math.sin(
			state.clock.elapsedTime + Math.random() * 0.01
		);
	});
	return (
		<mesh ref={boxRef} onClick={() => handleSpin(boxRef)}>
			<boxGeometry />
			<meshBasicMaterial color='mediumpurple' />
		</mesh>
	);
}

export default function Objects() {
	const scroll = useScroll();
	const { viewport, size } = useThree();
	const planeRef = useRef();
	const sphereRef = useRef();
	const torusRef = useRef();

	console.log(`View port height: ${viewport.height}`);
	console.log(`View port width: ${viewport.width}`);
	console.log(`View port size: ${size}`);

	useFrame(() => {
		if (sphereRef.current && torusRef.current) {
			sphereRef.current.position.y = scroll.offset - viewport.height;
			torusRef.current.position.y = scroll.offset - viewport.height * 2;

			sphereRef.current.rotation.y = scroll.offset * Math.PI * 2;
			torusRef.current.rotation.x = scroll.offset * Math.PI;

			const firstThird = scroll.range(0, 1 / 3);
			const secondThird = scroll.range(1 / 3, 1 / 3);
			const lastThird = scroll.range(2 / 3, 1 / 3);

			planeRef.current.material.opacity = 1 - firstThird;
			sphereRef.current.scale.setScalar(1 + secondThird);

			if (scroll.visible(2 / 3, 1 / 3)) {
				torusRef.current.rotation.z = lastThird * Math.PI;
			}
		}
	});
	const boxRef = useRef();
	return (
		<>
			<Box />
			<group>
				<mesh
					position={[2, 1, 1]}
					ref={planeRef}
					onClick={() => handleSpin(planeRef)}
					rotation={[0, 1, 1]}>
					<boxGeometry />
					<meshBasicMaterial color='mediumpurple' />
				</mesh>
				<mesh
					ref={sphereRef}
					position={[1, 0, 0]}
					onClick={() => handleSpin(sphereRef)}>
					<sphereGeometry />
					<meshBasicMaterial color='blue' />
				</mesh>
				<mesh
					ref={torusRef}
					position={[1, 0, 0]}
					onClick={() => handleSpin(torusRef)}>
					<torusGeometry />
					<meshBasicMaterial color='hotpink' />
				</mesh>
			</group>
		</>
	);
}
