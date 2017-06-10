const initialStoreState = {
	appName : 'Simulator',
	array : []
}

export default ( state = initialStoreState, action ) => {
	switch( action.type ){
		case 'updateAppName' :
			let newArray = state.array.slice();
			newArray.push(action.payload); 
			return { ...state, appName : action.payload, array : newArray };

		default : 
			return state;
	}
}