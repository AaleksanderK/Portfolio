export const titleAnimation = {
	hidden: {
		y: 0,
		opacity: 0,
	},
	visible:{
		y: 50,
		opacity: 1,
	 
	},
};


export const buttonAnimation = {
	hidden: {
		x: -100,
		opacity: 0,
	},
	visible: (custom: any) => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
};

export const textAnimation = {
	hidden: {
		x: -100,
		opacity: 0,
	},
	visible: (custom: any) => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
};