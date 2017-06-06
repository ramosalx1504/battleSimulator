import React from 'react';
import { View, Text, Button } from 'native-base';
import {Actions as Router } from 'react-native-router-flux';

import s from './styles';

class Main extends React.Component {

	onBtnPress(){
		Router.detail();
	}

	render(){
		return (
			<View style={s.container}>
				<Text style={s.text}>
					Probando navegación.
				</Text>
				<Button style={s.btn} block onPress={ () => this.onBtnPress() }>
					<Text style={{color:'white'}}>Go to Detail page.</Text>
				</Button>
			</View>
		);
	}
}

export default Main;