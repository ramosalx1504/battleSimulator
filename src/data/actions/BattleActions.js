
import { 
	SET_TURN_DATA, 
	SETPJ_1, SETPJ_2, 
	START_BATTLE, 
	END_BATTLE 
} from '../types/battle';

export const setTurnData = (payload) => ({ type: SET_TURN_DATA,	payload });
export const setPj1 = ( payload ) => ({ type: SETPJ_1, payload });
export const setPj2 = ( payload ) => ({ type: SETPJ_2, payload });
export const startBattle = () => ({ type: START_BATTLE });
export const endBattle = ( payload ) => ({ type: END_BATTLE, payload });