import React from 'react';
import { Scene,Router } from 'react-native-router-flux';
import { appStyle } from 'simulador/config';
import {View,Text} from 'native-base';

// Todas las Páginas como objeto Pages
import * as Pages from './pages';


const RouterComponent = (props) => (
	<Router hideNavBar={true} sceneStyle={{backgroundColor:'black'}} >
		<Scene  key='main' component={Pages.Main} title='Main' initial={true} />
		<Scene  key='detail' component={Pages.Detail} title='Detail' />
		<Scene  key='battle' component={Pages.Battle} title='Battle' />
		<Scene  key='about' component={Pages.Acerca} title='About' />
		<Scene  key='jedi' component={Pages.Tabs} title='Jedi' origin='Jedi' passProps={true} />
		<Scene  key='sith' component={Pages.Tabs} title='Sith' origin='Sith' passProps={true} />
		<Scene  key='simulation' component={Pages.Simulation} title='Simulation' />
	</Router>
);

export default RouterComponent;