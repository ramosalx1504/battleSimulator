
import React from 'react';
import { View,Text,Card,CardItem,Left,Body,Right,Thumbnail } from 'native-base';
import { ListView, Image,FlatList } from 'react-native';
import pjs from 'simulador/src/data/pjs.json';


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
						
						<Body>
							<Text style={{color:'black'}}>{rowData.nombre}</Text>
						</Body>
					</Left>
				</CardItem>
				<CardItem>
					<Body>
						<Text style={{color:'black'}}>{rowData.description}</Text>
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
	}
};