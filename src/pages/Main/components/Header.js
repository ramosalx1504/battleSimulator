import React from 'react';
import { View, Text } from 'native-base';
import { appStyle } from 'simulador/config';

const Header = ({text}) => (
	<View style={s.container}>
		<Text style={s.text}>
			{text}
		</Text>
	</View>
); 

export default Header;

const s = {
	container : {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: appStyle.colors.dark,
		height:appStyle.dimensions.height/5,
		elevation:3
	},	
	text:{
		fontSize : appStyle.font.size.huge,
		color: 'white',
		textShadowColor : 'black',
		textShadowOffset : {width: 0, height: 2},
		textShadowRadius : 3
	}
};