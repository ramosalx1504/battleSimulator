import {combineReducers} from 'redux';

import LayoutReducer from './LayoutReducer';

export default combineReducers({
	layout : LayoutReducer
});