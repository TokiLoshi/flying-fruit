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
					top: "50vh",
					left: "50vw",
					transform: "translateX(-50%)",
					color: "#292828",
					margin: 0,
				}}>
				Hello, World
			</h1>
			<h1
				style={{
					position: "absolute",
					top: "140vh",
					left: "50vw",
					transform: "translateX(-65%)",
					color: "#f4b677",
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
					color: "$673ab7",
					margin: 0,
				}}>
				Awaits
			</h1>
		</div>
	);
}
