
import React from 'react';
import { View,Text,Card,CardItem,Left,Body,Right,Thumbnail } from 'native-base';
import { ListView, Image,FlatList } from 'react-native';
import Habilidades from './components/Habilidades';
import pjs from 'simulador/src/data/pjs.json';
import imagenes from 'simulador/src/data/imagenes';


class  PjsList extends React.Component {

	constructor(props) {
		super(props);

		this.data = this.extract(this.props.data);
	}

	extract( data ){
		return pjs.filter((value) => {
			return value.orden === data;
		});
	}

	renderRow(rowData){
		return (
			<Card>
				<CardItem style={{flex:0}}>
					<Left>
						<Thumbnail
							style={s.thumbnail} 
							source={imagenes[rowData.id]} />
						<Body>
							<Text style={{color:'black'}}>{rowData.nombre}</Text>
						</Body>
					</Left>
				</CardItem>
				<CardItem>
					<Body style={{alignItems: 'center',flex:1}}>
						<Habilidades data={rowData.habilidades}/>
					</Body>
				</CardItem>
			</Card>
		);
	}

	render(){
		return (
			<View style={s.container}>
				<FlatList
				  data={this.data}
				  renderItem={({item}) => this.renderRow(item) }
				/>
			</View>
		);
	}
}

export default PjsList;

const s = {
	container : {
		padding: 8
	},
	thumbnail:{
		resizeMode:'cover'
	}
};