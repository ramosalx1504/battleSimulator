import React from 'react';
import { View, Button, Text } from 'native-base';
import { appStyle } from 'simulador/config';

const Footer = ({}) => (
	<View style={s.container}>
		<View style={s.item}>
			<Button block>
				<Text>
					Historial
				</Text>
			</Button>
		</View>
		<View style={s.item}>
			<Button block>
				<Text>
					Button
				</Text>
			</Button>
		</View>
		<View style={s.item}>
			<Button block>
				<Text>
					Button
				</Text>
			</Button>
		</View>
	</View>
); 

export default Footer;

const s = {
	container : {
		flexDirection:'row',
		backgroundColor: appStyle.colors.primary
	},
	item:{
		flex:1,
	}
};