const initialStoreState = {
	appName : 'Simulator',
	array : []
}

export default ( state = initialStoreState, action ) => {
	switch( action.type ){
		case 'updateAppName' :
			let newArray = state.array.slice();
			newArray.unshift(pushNewResult(action.payload)); 
			return { ...state, array : newArray };

		default : 
			return state;
	}
}

const pushNewResult = (payload) => {
	return {
		key: payload.turno,
		value:payload,
		text:'ataque'+ payload.turno
	};
}