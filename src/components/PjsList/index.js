import React from 'react';
import { View,Text,Card,CardItem,Left,Body,Right,Thumbnail } from 'native-base';
import { ListView, Image } from 'react-native';

class  PjsList extends React.Component {
	constructor(props) {
		super(props);

		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

		this.state = {
			dataSource: ds.cloneWithRows([{
				name:'Yoda',
				description:'Midiendo 66 centímetros, Yoda fue un representante masculino de una especie',
				logo:require('simulador/assets/logos/sithLogo.png'),
				atributes:{
					strench:20,
					smart:5
				}
			},{
				name:'nombre',
				description:'asd asd asd asjdnoa asjdnasoid asidb asoydb oias',
				logo:require('simulador/assets/logos/jediLogo.png'),
				atributes:{
					strench:20,
					smart:5
				}
			},{
				name:'nombre',
				description:'asd asd asd asjdnoa asjdnasoid asidb asoydb oias',
				logo:require('simulador/assets/logos/jediLogo.png'),
				atributes:{
					strench:20,
					smart:5
				}
			}])
		};
	}
	renderRow(rowData){
		return (
			<Card>
				<CardItem style={{flex:0}}>
					<Left>
						<Thumbnail source={rowData.logo} />
						<Body>
							<Text style={{color:'black'}}>{rowData.name}</Text>
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
				<Text>PJCOMPONEN</Text>
				<ListView
					initialListSize={3}
					dataSource={this.state.dataSource}
        			renderRow={(rowData) => this.renderRow(rowData)}
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