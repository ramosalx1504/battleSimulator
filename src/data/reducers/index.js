import {combineReducers} from 'redux';

import LayoutReducer from './LayoutReducer';
import BattleReducer from './BattleReducer';

export default combineReducers({
	layout : LayoutReducer,
	battle : BattleReducer
});