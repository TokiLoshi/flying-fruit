import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function App() {
	return (
		<>
			<Canvas>
				<OrbitControls />
				<color attach='background' args={["#ffbf40"]} />
				<mesh>
					<boxGeometry />
					<meshBasicMaterial color='mediumpurple' />
				</mesh>
			</Canvas>
		</>
	);
}

export default App;
