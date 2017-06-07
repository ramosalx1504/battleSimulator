import React from 'react';
import { View,Text } from 'native-base';

class Acerca extends React.Component {
	render(){
		return (
			<View style={s.container}>
				<Text>About View</Text>
			</View>	
		);
	}
} 

export default Acerca;

const s = {
	container : {

	}
};