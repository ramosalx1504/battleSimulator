import React from 'react';
import { View,Text } from 'native-base';

const ListItem = ({text,key}) => (
	<View style={s.container}>
		<Text>{text}</Text>
	</View>
); 

export default ListItem;

const s = {
	container : {

	}
};