import React from "react";

export default function SceneHtml() {
	return (
		<div
			style={{
				background: "white",
				fontFamily: "sans-serif",
				fontSize: "min(12vw, 86px)",
				lineHeight: 0.75,
			}}>
			<h1
				style={{
					position: "absolute",
					top: "40vh",
					left: "40vw",
					transform: "translateX(-50%)",
					color: "#a22b2a",
					margin: 0,
				}}>
				Hello, Fruity World
			</h1>
			<h1
				style={{
					position: "absolute",
					top: "140vh",
					left: "50vw",
					transform: "translateX(-65%)",
					color: "#ff1a55",
					margin: 0,
				}}>
				Your Future
			</h1>
			<h1
				style={{
					position: "absolute",
					top: "250vh",
					left: "50vw",
					transform: "translateX(-50%)",
					color: "#363996",
					margin: 0,
				}}>
				Awaits
			</h1>
			<h1
				style={{
					position: "absolute",
					top: "350vh",
					left: "50vw",
					transform: "translateX(-50%)",
					color: "#123aa7",
					margin: 0,
				}}>
				And it's bananas
			</h1>
		</div>
	);
}
