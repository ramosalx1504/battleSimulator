import React from 'react';
import { View, Text } from 'native-base';
import { appStyle } from 'simulador/config';

import ModalDropdown from 'react-native-modal-dropdown';

class PjSelector extends React.Component {
	renderRow(item){
		return (
			<View>
				<Text>{item}</Text>
			</View>
		);
	}
	render(){
		const {data,onSelect} = this.props;
		return (
			<View style={s.container}>
	 			<ModalDropdown 
					options={data}
					onSelect={onSelect}
					style={s.style}
					textStyle={s.textStyle}
					dropdownStyle={s.dropdownStyle}
				/>
			</View>
		);
	}
}

export default PjSelector;

const s = {
	container : {
		//backgroundColor:'white',
	},
	dropdownStyle:{
		width: appStyle.dimensions.width - appStyle.grid.x4
	},
	textStyle:{
		color:'white',
		fontSize : appStyle.font.size.large
	},
	style:{
		padding : appStyle.grid.x2
	}
};