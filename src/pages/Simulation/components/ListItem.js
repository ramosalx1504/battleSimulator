'use strict';

import React, { Component } from 'react';

import { View,Text } from 'native-base';
import { appStyle } from 'simulador/config';

class ListItem extends Component {
  render() {
  	const { atacante, defensor, key } = this.props.data;
  	console.log(defensor);
    return (
      <View style={s.container}>
      		<Ataque
      			keyForTurn={key%2}
      			nombre={atacante.nombre} 
      			acierta={atacante.acierta} 
      			data={atacante.ataqueUsado} />
      
      		<Defensa
      			keyForTurn={key%2}
      			nombre={defensor.nombre} 
      			acierta={defensor.acierta} 
      			data={defensor.defensaUsada}/>
      		<Resultado 
      			atacante={atacante}
      			defensor={defensor}
      		/>
      </View>
    );
  }
}

const Resultado = ({atacante,defensor}) => {

	function getSumaDeDaño(){
		if(atacante.acierta){
			if(defensor.acierta){
				let result = atacante.ataqueUsado.daño - defensor.defensaUsada.resistencia;
				return result < 0 ? 0 : result;
			} else {
				return atacante.ataqueUsado.daño;
			}
		}else{
			return 0;
		}
	}

	return(
		<View style={{paddingVertical:8,marginTop:8,borderTopColor:'rgba(0,0,150,0.5)',borderTopWidth:1}}>
			<Text style={{alignSelf:'center',fontSize:14}}>
				{`*${defensor.nombre} recibe ${getSumaDeDaño()}pts de daño*`}
			</Text>
		</View>
	);
}

const Ataque = ({acierta,data,nombre,keyForTurn}) => {

	return(
		<View style={ keyForTurn === 1 ? s.right : s.left }>
			<Text>{`${nombre} ataca :`}</Text>
			<Text 
				style={acierta ? {color:'yellow'} : {color:'gray'}}
			>{`${acierta ? data.nombre+' -> daño : '+data.daño : 'Ha fallado el ataque'}.`}
			</Text>
		</View>
	);

}

const Defensa = ({acierta,data,nombre,keyForTurn}) => {

	let result = acierta ? data.nombre : ' recibe Impacto Directo';

	return (
		<View style={ keyForTurn === 1 ? s.left : s.right }>
			<Text
				style={{marginTop:16}}
			>{`${nombre} se defiende :`}</Text>
			<Text
				style={ acierta ? {color:'green'} : {color:'red'}}
			>{`${acierta ? 'Usa -> '+data.nombre+' absorbe : '+data.resistencia : ' Recibe Impacto Directo'}`}</Text>
		</View>
	);
};

const s = {
	container:{
		marginHorizontal: 3,
		padding: appStyle.grid.x1,
		borderBottomColor : 'lightgray',
		borderBottomWidth: 1
	},
	left:{
		alignItems: 'flex-start',
	},
	right:{
		alignItems: 'flex-end',
	}
};


export default ListItem;