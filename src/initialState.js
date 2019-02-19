const initialState = {
	portals : {
		RECOMMENDATIONS: true,
		MINIBASKET: true,
		MINICART: false,
		NOTIFICATIONS: false,
		LOADING: true,
	},
	loading: false,
	cart: {
		items: []
	}

}

export default initialState