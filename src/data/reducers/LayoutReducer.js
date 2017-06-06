const initialStoreState = {
	appName : 'Simulator'
}

export default ( state = initialStoreState, action ) => {
	switch( action.type ){
		case 'updateAppName' : 
			return { ...state, appName : action.payload };

		default : 
			return state;
	}
}