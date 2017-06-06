import React from 'react';
import {Actions as Router } from 'react-native-router-flux';
import { Container } from 'simulador/src/components';
import { Button, Text, View } from 'native-base';

/**
 * Custom Components
 */ import Dashboard from './components/Dashboard';
 	import Footer from './components/Footer';
 	import Header from './components/Header';

class Main extends React.Component {

	_handlePressButton( id ){
		console.log(id);
	}

	render(){
		return (
			<Container>
				<Header text='Simulador de Batallas'/>
				<Container box bottom>
					<Dashboard
					onNewBattlePress={()=> this._handlePressButton('newBattle')}
					onOrdenJediPress={()=> this._handlePressButton('ordenJedi')}
					onOrdenSithPress={()=> this._handlePressButton('ordenSith')}
					onMoreInfoPress={()=> this._handlePressButton('moreInfo')}
					/>
				</Container>
				<Footer />
			</Container>
		);
	}
}

export default Main;