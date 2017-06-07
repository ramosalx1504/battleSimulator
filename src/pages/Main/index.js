import React from 'react';
import {Actions as Router } from 'react-native-router-flux';
import { Container } from 'simulador/src/components';
import { Button, Text, View } from 'native-base';
import { Image } from 'react-native';
import { appStyle } from 'simulador/config';

/**
 * Custom Components
 */ import Dashboard from './components/Dashboard';
 	import Footer from './components/Footer';
 	import Header from './components/Header';

class Main extends React.Component {

	_handlePressButton( id ){
		switch(id){
			case 'newBattle' :
				return Router.battle();
			case 'moreInfo' :
				return Router.about();
			case 'ordenJedi' :
				return Router.jedi();
			case 'ordenSith' :
				return Router.sith();
		}
	}

	render(){
		return (
			<Image style={style.img} source={require('simulador/assets/background.jpg')}>
				<Header text='SIMULADOR DE BATALLAS'/>
				<Container box bottom>
					<Dashboard
					onNewBattlePress={()=> this._handlePressButton('newBattle')}
					onOrdenJediPress={()=> this._handlePressButton('ordenJedi')}
					onOrdenSithPress={()=> this._handlePressButton('ordenSith')}
					onMoreInfoPress={()=> this._handlePressButton('moreInfo')}
					/>
				</Container>
				
			</Image>
		);
	}
}

export default Main;

const style = {
	img: {
		width: appStyle.dimensions.width,
		height : appStyle.dimensions.height - 24,
		resizeMode : 'cover'
	}
};