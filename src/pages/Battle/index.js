import React from 'react';
import { View, Text,Button } from 'native-base';

class Battle extends React.Component {
	render(){
		return (
			<View style={s.container}>
				<View style={s.nav}>
					<View style={{flex:1,backgroundColor:'green'}}/>
					<View style={{width:50}}/>
					<View style={{flex:1,backgroundColor:'green'}}/>
				</View>
				<View style={s.f1}>
					<View style={s.status}/>
					<View>
						<View style={s.row}>
							<View style={s.top}>
								<View style={s.pj}>
									
								</View>
								<View style={s.ataque}>
									<Button block>
										<Text>Atacar</Text>
									</Button>
								</View>
							</View>
							<View style={s.top}>
								<View style={s.ataque}>
									<Button block>
										<Text>Atacar</Text>
									</Button>
								</View>
								<View style={s.pj}>
									
								</View>
							</View>
						</View>
						<View style={s.row}>
							<View style={s.left}>
								<Button style={{marginBottom:8}} block rounded><Text>ataque1</Text></Button>
								<Button style={{marginBottom:8}} block rounded><Text>ataque2</Text></Button>
								<Button style={{marginBottom:8}} block rounded><Text>ataque3</Text></Button>
							</View>
							<View style={s.right}>
								<Button style={{marginBottom:8}} block rounded><Text>ataque1</Text></Button>
								<Button style={{marginBottom:8}} block rounded><Text>ataque2</Text></Button>
								<Button style={{marginBottom:8}} block rounded><Text>ataque3</Text></Button>
							</View>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

const Vida = () => (
	<View style={{flex:1}} />
);

export default Battle;

const s = {
	container:{
		flex:1,
	},
	nav:{
		height:50,
		backgroundColor:'white',
		flexDirection:'row'
	},
	f1:{
		flex:1
	},
	status:{
		flex:1,
		backgroundColor:'white'
	},
	row:{
		flexDirection:'row'
	},
	left:{
		flex:1,
		backgroundColor:'red',
		paddingHorizontal:10
	},
	right:{
		flex:1,
		backgroundColor:'blue',
		paddingHorizontal:10
	},
	pj:{
		width:60,
		height:60,
		backgroundColor:'red'
	},
	ataque:{
		flex:1,
		backgroundColor:'yellow'
	},
	top:{
		backgroundColor:'skyblue',
		flex:1,
		flexDirection:'row'
	}
};