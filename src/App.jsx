import {
	Loader,
	OrbitControls,
	Scroll,
	ScrollControls,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import Objects from "./Objects";
import * as THREE from "three";
import SceneHtml from "./components/SceneHtml";

// Generate a scroll based animation
// on each fram check the mouse and the camera
// set the camera position to the interpolation of the start x (camera),
// end y (mouse) and interpolation interval between 0 and 1
function ScrollAnimation() {
	useFrame(({ pointer, camera }) => {
		camera.position.x = THREE.MathUtils.lerp(
			camera.position.x,
			pointer.x * 0.5,
			0.03
		);
		camera.position.y = THREE.MathUtils.lerp(
			camera.position.y,
			pointer.y * 0.8,
			0.01
		);
		camera.position.z = THREE.MathUtils.lerp(
			camera.position.z,
			Math.max(4, Math.abs(pointer.x * pointer.y * 8)),
			0.01
		);
		camera.position.y = THREE.MathUtils.lerp(
			camera.rotation.y,
			pointer.x * Math.PI * 0.025,
			0.01
		);
	});
	return (
		<ScrollControls pages={3} damping={0.1}>
			<Scroll>
				<Objects />
			</Scroll>
			<Scroll html>
				<SceneHtml />
			</Scroll>
		</ScrollControls>
	);
}

function App() {
	return (
		<>
			<Canvas shadows>
				{/* <OrbitControls /> */}
				<ambientLight />
				<spotLight position={[10, 10, 10]} intensity={1} />
				<color attach='background' args={["#ffbf40"]} />
				<Suspense fallback={null}></Suspense>
				{/* <Box /> */}
				<ScrollAnimation />
			</Canvas>
			<Loader />
		</>
	);
}

export default App;
