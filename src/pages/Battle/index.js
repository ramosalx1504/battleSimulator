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
	


class Battle extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	pj1Selected: null,
	  	pj1Selected: null
	  };
	}

	_handlePressButton(){
		Router.simulation();
	}

	_handleSelection(pj,value){
		switch (pj) {
			case 'pj1':
				this.props.setPj1(value);
				break;
			case 'pj2':
				this.props.setPj2(value);
				break;
		}
	}

	render() {

		const { pj1Info,pj2Info } = this.props.battle;

		return (
		  <View style={s.f1}>
		  	<Text>Esta es la vista de selección de personajes</Text>
		  	<Button onPress={()=>this._handlePressButton()}>
		  		<Text>Ir a vista de batalla</Text>
		  	</Button>
		  	<PjSelector
		  		selected={pj1Info}
		  		data={'Jedi'}
		  		color={'blue'}
		  		onSelect={(index,value)=>this._handleSelection('pj1',value)}
		  	/>
		  	<PjSelector
		  		selected={pj2Info}
		  		data={'Sith'}
		  		color={'red'}
		  		onSelect={(index,value)=>this._handleSelection('pj2',value)}
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
export default connect(mapStateToProps,{setPj2,setPj1})(Battle);