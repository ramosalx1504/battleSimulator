import React from 'react';
import { Scene,Router } from 'react-native-router-flux';

import {View,Text} from 'native-base';

// Todas las Páginas como objeto Pages
import * as Pages from './pages';


const RouterComponent = (props) => (
	<Router sceneStyle={{paddingTop:54,backgroundColor:'black'}} >
		<Scene key='main' component={Pages.Main} title='Main' initial={true} />
		<Scene key='detail' component={Pages.Detail} title='Detail' />
	</Router>
);

export default RouterComponent;