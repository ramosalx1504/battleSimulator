/**
 * Components
 */ import React, { Component } from 'react';
	import {Actions as Router } from 'react-native-router-flux';
	import { connect } from 'react-redux';
	import { View, Button, Text } from 'native-base';
	import PjSelector from './components/PjSelector';

/**
 * Data 
 */ import { setPj1, setPj2 } from 'simulador/src/data/actions/BattleActions';
	import pjs from 'simulador/src/data/pjs.json';


class Battle extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	_handlePressButton(){
		Router.simulation();
	}

	render() {
		return (
		  <View style={s.f1}>
		  	<Text>Esta es la vista de selección de personajes</Text>
		  	<Button onPress={()=>this._handlePressButton()}>
		  		<Text>Ir a vista de batalla</Text>
		  	</Button>
		  	<PjSelector
		  		onSelect={(selected)=>console.log(selected)} 
		  		data={['Yoda']}
		  	/>
		  </View>
		);
	}
}

const s = {
	f1:{
		flex:1
	}
};

const mapStateToProps = ({battle}) => ({battle});
export default connect(mapStateToProps,{})(Battle);