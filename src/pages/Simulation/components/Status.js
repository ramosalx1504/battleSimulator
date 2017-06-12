import React from 'react';
import { View } from 'native-base';
import { appStyle } from 'simulador/config';

const Status = ({children}) => (
	<View style={s.container}>
		{
			children
		}
	</View>
); 

export default Status;

const s = {
	container : {
		flex:1,
		backgroundColor:'rgba(50,100,255,0.2)',
		marginTop:appStyle.grid.x1,
		marginBottom:appStyle.grid.x2,
		marginHorizontal:appStyle.grid.x2,
		borderRadius: appStyle.border.radius,
		borderColor:'rgb(50,100,255)',
		borderWidth: appStyle.border.width,
	}
};