const initialStoreState = {
	dataListItems:[],
	turno:null,
	pj1Info:{
		id:null,
		name:'Yoda'
	},
	pj2Info:{
		id:null,
		name:'Yoda'
	},
	pj1State:{
		life : 1
	},
	pj2State:{
		life : 1
	},
	currentBattleState: 0
}

export default ( state = initialStoreState, action ) => {

	switch( action.type ){

		case 'setPj1' :
			return state;

		case 'setPj2' :
			return state;

		case 'changeBattleState' :
			return { ...state, currentBattleState : action.payload };

		case 'setTurnData' :
			
			let newArray = state.dataListItems.slice();
				newArray.unshift(makeNewDataItem(action.payload)); 
			
			return { 
				...state, 
				dataListItems : newArray,
				turno: action.payload.turno 
			};

		default : 
			return state;
	}
}

const makeNewDataItem = (payload) => {
	return {
		key: payload.turno,
		value:payload,
		text:'ataque'+ payload.turno
	};
}