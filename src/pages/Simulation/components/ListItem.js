'use strict';

import React, { Component } from 'react';

import { View,Text } from 'native-base';
import { appStyle } from 'simulador/config';

class ListItem extends Component {
  render() {
  	const { atacante, defensor, key } = this.props.data;
  	console.log(atacante);
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
      	
      </View>
    );
  }
}

const Ataque = ({acierta,data,nombre,keyForTurn}) => {

	return(
		<View style={ keyForTurn === 1 ? s.right : s.left }>
			<Text>{`${nombre} ataca :`}</Text>
			<Text>{`${acierta ? 'Usa -> '+data.nombre : 'Ha fallado el ataque'}.`}</Text>
		</View>
	);

}

const Defensa = ({acierta,data,nombre,keyForTurn}) => {

	let result = acierta ? data.nombre : ' recibe Impacto Directo';

	return (
		<View style={ keyForTurn === 1 ? s.left : s.right }>
			<Text>{`${nombre} se defiende :`}</Text>
			<Text>{`${acierta ? 'Usa -> '+data.nombre : ' Recibe Impacto Directo'}`}</Text>
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