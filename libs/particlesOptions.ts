export const particlesOptions = {
	fullScreen: {
		enable: true,
		zIndex: -1,
	},
	particles: {
		number: {
			value: 15,
			density: {
				enable: false,
				area: 800,
			},
		},
		color: {
			value: "#333",
		},
		shape: {
			type: "cicle",
			options: {
				sides: 2,
			},
		},
		opacity: {
			value: 1,
			random: false,
			anim: {
				enable: false,
				speed: 1,
				min: 0.1,
				sync: false,
			},
		},
		size: {
			value: 1,
			random: false,
			anim: {
				enable: false,
				speed: 20,
				min: 0.1,
				sync: false,
			},
		},
		rotate: {
			value: 0,
			random: true,
			direction: "clockwise",
			animation: {
				enable: true,
				speed: 5,
				sync: false,
			},
		},
		line_linked: {
			enable: true,
			distance: 600,
			color: "#000",
			opacity: 0.2,
			width: 2,
		},
		move: {
			enable: true,
			speed: 1,
			direction: "none",
			random: false,
			straight: false,
			outModes: "out",
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200,
			},
		},
	},
	// interactivity: {
	//   events: {
	//     onhover: {
	//       enable: true,
	//       mode: ["grab"],
	//     },
	//     onclick: {
	//       enable: false,
	//       mode: "bubble",
	//     },
	//     resize: true,
	//   },
	//   modes: {
	//     grab: {
	//       distance: 400,
	//       line_linked: {
	//         opacity: 1,
	//       },
	//     },
	//     bubble: {
	//       distance: 400,
	//       size: 40,
	//       duration: 2,
	//       opacity: 8,
	//       speed: 3,
	//     },
	//     repulse: {
	//       distance: 200,
	//     },
	//     push: {
	//       particles_nb: 4,
	//     },
	//     remove: {
	//       particles_nb: 2,
	//     },
	//   },
	// },
	retineDetect: true,
	background: {
		color: "#fff",
		image: "",
		position: "50% 50%",
		repeat: "no-repeat",
		size: "cover",
	},
};
