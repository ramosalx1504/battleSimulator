import React from 'react';
import {View,Text,Button} from 'native-base'

class Detail extends React.Component {
	render(){
		return (
			<View style={s.container}>
				<Button>
					<Text>
						Back
					</Text>
				</Button>
			</View>
		);
	}
}

export default Detail;

const s = {
	container : {
		flex:1,
		alignItems: 'center',
		justifyContent: 'center',
	}
};