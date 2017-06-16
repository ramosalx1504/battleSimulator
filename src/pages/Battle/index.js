/**
 * Components
 */ import React, { Component } from 'react';
	import {Actions as Router } from 'react-native-router-flux';
	import { connect } from 'react-redux';
	import { View, Button, Text } from 'native-base';
	import PjSelector from './components/PjSelector';
	import { appStyle } from 'simulador/config';

/**
 * Data 
 */ import { setPj1, setPj2, startBattle } from 'simulador/src/data/actions/BattleActions';
	


class Battle extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	pj1Selected: null,
	  	pj1Selected: null
	  };
	}

	_handlePressButton(){
		const { pj1Info, pj2Info } = this.props.battle;

		this.props.startBattle( pj1Info && pj1Info.id, pj2Info && pj2Info.id );
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
		  	
		  	<View style={s.header}>
		  		<Text style={s.title}> Selección de Personajes </Text>
		  	</View>
		  	
		  	<View style={s.dashboard}>
		  		<PjSelector
			  		selected={pj1Info}
			  		data={'Jedi'}
			  		color={'blue'}
			  		onSelect={(index,value)=>this._handleSelection('pj1',value)}
			  	/>

			  	<View>
			  		<Text style={s.vs}>VS</Text>
			  	</View>

			  	<PjSelector
			  		selected={pj2Info}
			  		data={'Sith'}
			  		color={'red'}
			  		onSelect={(index,value)=>this._handleSelection('pj2',value)}
			  	/>
		  	</View>
		  	<View style={s.btnWrap}>
		  		<Button block onPress={()=>this._handlePressButton()}>
			  		<Text>Iniciar la batalla -></Text>
			  	</Button>
		  	</View>
		  </View>
		);
	}
}

const s = {
	f1:{
		flex:1,
		backgroundColor:'rgba(50,50,200,0.1)'
	},
	header:{
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: appStyle.colors.dark,
		height:appStyle.dimensions.height/5,
		elevation:3
	},
	title:{
		fontSize : appStyle.font.size.huge,
		color: 'white',
		textShadowColor : 'black',
		textShadowOffset : {width: 0, height: 2},
		textShadowRadius : 3
	},
	dashboard:{
		flex:1,
		justifyContent: 'space-around',
		paddingVertical: appStyle.grid.x4
	},
	btnWrap:{
		height:appStyle.dimensions.height/7,
		paddingHorizontal: appStyle.grid.x6
	},
	vs:{
		alignSelf:'center',
		fontSize: appStyle.font.size.huge,
	}
};

const mapStateToProps = ({battle}) => ({battle});
export default connect(mapStateToProps,{setPj2,setPj1,startBattle})(Battle);