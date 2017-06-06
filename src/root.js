import React from 'react';
import { Provider } from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './data/reducers';
import Router from './router';
import {getTheme,StyleProvider} from 'native-base';
import Theme from '../config/theme/nativeBaseTheme';

const initialStoreState = {};

var store = createStore(reducers, initialStoreState, applyMiddleware(ReduxThunk));

const RootComponent = () => (
	<Provider store={store}>
		<StyleProvider style={getTheme(Theme)}>
			<Router/>
		</StyleProvider>
	</Provider>
);

export default RootComponent;