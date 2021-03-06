/**
 * Components Imports
 */ import React, { Component } from 'react';
	import { View, Text, Button } from 'native-base';
	import { FlatList } from 'react-native';
	import Header from './components/Header';
	import Status from './components/Status';
	import ListItem from './components/ListItem';

/**
 * Utils
 */ import { Simulator } from 'simulador/src/utils';

/**
 * Redux Stuff
 */ import { connect } from 'react-redux';
 	import { changeLayoutState } from 'simulador/src/data/actions/LayoutActions';
 	import { setTurnData } from 'simulador/src/data/actions/BattleActions';


/**
 * @description [description]
 * @author  Alexis Ramos Mora - ramosalx1504@hotmail.com
 */
class Simulation extends Component {
	constructor(props) {
		super(props);
	}

	_handleSimulation(){
		const { pj1Info, pj2Info } = this.props.battle;

		var simulacion = new Simulator( pj1Info.id, pj2Info.id, this._onBattleFinish.bind(this));
			simulacion.start(this._onTurnEnd.bind(this));
	}

	_onTurnEnd(data){
		this.props.setTurnData(data)
	}

	_onBattleFinish(){
		console.log('Battle finish fired');
	}


	renderItem(data){
		return (
			<ListItem
				data={data}
			/>
		);
	}

	render() {

		const {
			dataListItems,
			pj1Info,
			pj2Info,
			pj1State,
			pj2State,
			turno
		} = this.props.battle;

		return (
			<View style={s.container}>
				<View style={s.wrapButton}>
					<Button success block onPress={()=>this._handleSimulation()}>
						<Text>
							Start Battle
						</Text>
					</Button>
				</View>
				<Header 
					name1={pj1Info.nombre}
					name2={pj2Info.nombre}
					vidaPj1={pj1State.life}
					vidaPj2={pj2State.life}
					turno={turno}
				/>
				<Status>
					<FlatList 
						data={dataListItems}
						renderItem={({item,index})=>this.renderItem(item,index)}
					/>
				</Status>
			</View>
		);
	}
}

const s = {
	container:{
		flex:1
	},
	wrapButton:{
		padding:16,
		paddingBottom:0
	}
};

const mapStateToProps = ({battle}) => ({battle});

export default connect(mapStateToProps,{setTurnData})(Simulation);