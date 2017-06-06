import React from 'react';
import { View, Text, Button } from 'native-base';
import {Actions as Router } from 'react-native-router-flux';
import { Container } from 'simulador/src/components';

import s from './styles';

class Main extends React.Component {

	onBtnPress(){
		Router.battle();
	}

	render(){
		return (
			<Container box bottom>
				<Text style={s.text}>
					Probando navegación.
				</Text>
				<Button style={s.btn} block onPress={ () => this.onBtnPress() }>
					<Text style={{color:'white'}}>Go to Detail page.</Text>
				</Button>
			</Container>
		);
	}
}

export default Main;