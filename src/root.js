import React from 'react';
import { Provider } from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './data/reducers';
import Router from './router';
import {View,Text} from 'native-base'
const initialStoreState = {}; 
var store = createStore(reducers, initialStoreState, applyMiddleware(ReduxThunk));

const RootComponent = () => (
	<Provider store={store}>
		<Router/>
	</Provider>
);

export default RootComponent;