import React from 'react';
import { View,Text,Icon } from 'native-base';

const Habilidades = ({data}) => (
	<View style={s.container}>
		<StarsBar title={'Fuerza'} number={data.fuerza} />
		<StarsBar title={'Inteligencia'} number={data.inteligencia} />
		<StarsBar title={'Velocidad'} number={data.velocidad} />
		<StarsBar title={'Resistencia'} number={data.resistencia} />
	</View>
); 

export default Habilidades;


const StarsBar = ({number,title}) => {
	
	let stars = [];

	for( let i = 0; i < number; i++ ){
		stars.push(<Icon name={'star'} style={s.icon} key={i}/>);
	}

	return(
		<View style={s.barContainer}>
			<Text style={s.habTitle}>{title}</Text>
			<View style={s.stars}>
				{stars}
			</View>
		</View>
	);
}

const s = {
	container : {
		flex:1,

	},
	barContainer:{
		flexDirection:'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	text:{
		color:'black'
	},
	habTitle:{
		color:'black'
	},
	stars:{
		flexDirection:'row',
		marginLeft:24
	},
	icon:{
		color:'blue'
	}
};