/**
 * Components Imports
 */ import React, { Component } from 'react';
	import { View, Text, Button } from 'native-base';

/**
 * Utils
 */ import { Simulator } from 'simulador/src/utils';

/**
 * Redux Stuff
 */ import { connect } from 'react-redux';
 	import { changeLayoutState } from 'simulador/src/data/actions/LayoutActions';


/**
 * @description [description]
 * @author  Alexis Ramos Mora - ramosalx1504@hotmail.com
 */
class Simulation extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	_handleSimulation(){
		var simulacion = new Simulator();
			simulacion.start(this._onTurnEnd.bind(this));
	}

	_onTurnEnd(data){
		console.log('firedTurn');
		this.props.changeLayoutState(data)
	}

	arrayRender(){
		let array = this.props.layout.array.slice();
		return array.map((value,i)=>{
			return <Text key={i}>{value}</Text>
		})
	}

	render() {
		return (
			<View>
				<Button block onPress={()=>this._handleSimulation()}>
					<Text>
						Start
					</Text>
				</Button>
				<Button block onPress={()=>this.props.changeLayoutState('WORKS')}>
					<Text>
						Update Name 
					</Text>
				</Button>
				<Text>{this.props.layout.appName}</Text>
				{
					this.arrayRender()
				}
			</View>
		);
	}
}

const s = {
	container:{
		flex:1
	}
};

const mapStateToProps = ({layout}) => ({layout});

export default connect(mapStateToProps,{changeLayoutState})(Simulation);