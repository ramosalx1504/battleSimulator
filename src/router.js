import React from 'react';
import { Scene,Router } from 'react-native-router-flux';
import { appStyle } from 'simulador/config';
import {View,Text} from 'native-base';

// Todas las Páginas como objeto Pages
import * as Pages from './pages';


const RouterComponent = (props) => (
	<Router hideNavBar={true} >
		<Scene  key='main' component={Pages.Main} title='Main' initial={true} />
		<Scene  key='detail' component={Pages.Detail} title='Detail' />
		<Scene  key='battle' component={Pages.Battle} title='Battle' />
	</Router>
);

export default RouterComponent;