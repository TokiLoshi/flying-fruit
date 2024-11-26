import { Environment, Loader, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import SceneHtml from "./components/SceneHtml";
import { Leva } from "leva";
import { Fruits } from "./components/Fruits";

const city = import("@pmndrs/assets/hdri/city.exr").then(
	(module) => module.default
);
// Based on pmnd.rs renders of three.js journey in r3f
// https://codesandbox.io/p/sandbox/github/pmndrs/threejs-journey/tree/main/examples/classic-techniques/ScrollBasedAnimation?file=%2Fsrc%2FApp.jsx%3A24%2C15-24%2C18&from-embed
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
		<ScrollControls pages={4} damping={0.1}>
			<Scroll>
				<Fruits />
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
			<Leva collapsed hidden={location.hash !== "#debug"} />
			<Canvas shadows gl={{ localClippingEnabled: true }}>
				{/* <OrbitControls /> */}
				<ambientLight intensity={2} />
				<Environment
					files={[
						"./envMaps/px.png",
						"./envMaps/nx.png",
						"./envMaps/py.png",
						"./envMaps/ny.png",
						"./envMaps/pz.png",
						"./envMaps/nz.png",
					]}
					background
				/>
				<directionalLight
					position={[10, 10, 10]}
					intensity={1}
					castShadow
					shadow-mapSize={[512, 512]}
				/>
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
