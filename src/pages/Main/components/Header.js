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
		backgroundColor: appStyle.colors.primary,
		height:100
	},	
	text:{
		fontSize : appStyle.font.size.huge,
		color: 'white'
	}
};