import {Actions as Router } from 'react-native-router-flux';

import { 
	SET_TURN_DATA, 
	SETPJ_1, SETPJ_2, 
	START_BATTLE, 
	END_BATTLE 
} from '../types/battle';

export const setTurnData = (payload) => ({ type: SET_TURN_DATA,	payload });
export const setPj1 = ( payload ) => ({ type: SETPJ_1, payload });
export const setPj2 = ( payload ) => ({ type: SETPJ_2, payload });
export const endBattle = ( payload ) => ({ type: END_BATTLE, payload });

export const startBattle = (pj1ID,pj2ID) => {
	if( pj1ID && pj2ID ){
		dispatch({
			type : START_BATTLE
		});
		Router.simulador();
	} else {
		alert('Debe Seleccionar los 2 personajes para continuar!');
	}
};