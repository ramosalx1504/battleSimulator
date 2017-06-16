import { 
	SET_TURN_DATA, 
	SETPJ_1, SETPJ_2, 
	START_BATTLE, 
	END_BATTLE 
} from '../types/battle';

const initialStoreState = {
	dataListItems:[],
	turno:null,
	pj1Info:{
		id:null,
		name: null
	},
	pj2Info:{ 
		id:null,
		name: null
	},
	pj1State:{ life : 1 },
	pj2State:{ life : 1	},
	currentBattleState: null
}

export default ( state = initialStoreState, action ) => {

	switch( action.type ){

		case SETPJ_1 :
			return {
				...state,
				pj1Info : action.payload
			};

		case SETPJ_2 :
			return {
				...state,
				pj2Info : action.payload
			};

		case START_BATTLE :
			return { 
				...state, 
				currentBattleState : action.payload 
			};

		case SET_TURN_DATA :
			
			let newArray = state.dataListItems.slice();
				newArray.unshift(makeNewDataItem(action.payload)); 
			
			return { 
				...state, 
				dataListItems : newArray,
				turno: action.payload.turno,
				pj1State : action.payload.pjsState.pj1,
				pj2State : action.payload.pjsState.pj2 
			};

		default : 
			return state;
	}
}

const makeNewDataItem = (payload) => {
	return {
		key: payload.turno,
		value:payload,
		text: payload.turno+' ->atacante'+payload.atacante.id+' - defensor:'+payload.defensor.id,
		atacante: payload.atacante,
		defensor: payload.defensor,
	};
}