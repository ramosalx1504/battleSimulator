import React from 'react';
import { View, Text, Button } from 'native-base';

import s from './styles';

class Main extends React.Component {
	render(){
		return (
			<View style={s.container}>
				<Text style={s.text}>
					Probando navegación.
				</Text>
				<Button style={s.btn} block>
					<Text style={{color:'white'}}>Go to Detail page.</Text>
				</Button>
			</View>
		);
	}
}

export default Main;