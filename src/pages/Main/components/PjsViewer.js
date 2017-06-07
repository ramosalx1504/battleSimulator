import React from 'react';
import { View, Button,Text,Thumbnail } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { appStyle } from 'simulador/config';

const PjViewer = ({onJediPress,onShitPress}) => (
	<View style={s.container}>
		<Text style={s.title}>
			PERSONAJES
		</Text>
		<View style={s.list}>
			<TouchableOpacity onPress={onJediPress} style={getStyle('jedi')}>
				<Text>{'Orden JEDI'}</Text>
				<Thumbnail
					style={s.tumb}  
					large
					size={80} 
					square 
					source={require('simulador/assets/logos/jediLogo.png')} />
			</TouchableOpacity>
			<TouchableOpacity onPress={onShitPress} style={getStyle('sith')}>
				<Text>{'Orden SITH'}</Text>
				<Thumbnail 
					style={s.tumb} 
					large
					size={80} 
					square 
					source={require('simulador/assets/logos/sithLogo.png')} />
			</TouchableOpacity>
		</View>
	</View>
); 

const getStyle = (key) => {
	return Object.assign({},s.btnList,s[key]);
}

export default PjViewer;

const s = {
	container : {
		borderRadius : appStyle.container.border.radius,
		borderWidth : appStyle.container.border.width,
		borderColor : appStyle.colors.primary,
		backgroundColor:appStyle.colors.primary
	},
	list:{
		flexDirection:'row',
		paddingLeft: appStyle.grid.x2,
		borderTopColor:'rgba(256,256,256,0.3)',
		borderTopWidth:1,
		paddingTop: appStyle.grid.x2,
	},
	btnList : {
		flex:1,
		alignItems: 'center',
		padding: appStyle.grid.x1,
		marginBottom: appStyle.grid.x2,
		marginRight: appStyle.grid.x2,
		borderRadius : appStyle.container.border.radius,
		borderWidth : appStyle.container.border.width,
		borderColor : appStyle.colors.primary,
		elevation:3
	},
	sith:{
		backgroundColor:appStyle.colors.sith,
	},
	jedi:{
		backgroundColor:appStyle.colors.jedi,
	},
	tumb : {
		resizeMode:'contain'
	},
	title:{
		alignSelf:'center',
		marginVertical: appStyle.grid.x1,
		paddingBottom:4,
		color:'white'
	}
};