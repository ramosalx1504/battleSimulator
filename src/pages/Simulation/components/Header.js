import React, { Component } from 'react';
import { View, Text } from 'native-base';
import * as Progress from 'react-native-progress';
import {appStyle} from 'simulador/config';

class Header extends Component {

	static defaultProps = {
	  vidaPj1: 1,
	  vidaPj2: 1
	}

	render() {
		const {vidaPj1,vidaPj2,name2,name1,turno} = this.props;
		return (
			<View>
				<PjNames 
					name1={name1}
					name2={name2}
				/>
				<View style={s.progressContainer}>
					<View>
						<Progress.Bar 
							progress={vidaPj1} 
							width={appStyle.dimensions.widthPercentage(39)} 
							height={24} 
						/>
					</View>
					<Turn number={ turno === null ? '-' : turno+1 } />
					<View>
						<Progress.Bar 
							progress={vidaPj2} 
							width={appStyle.dimensions.widthPercentage(39)} 
							height={24}
						/>
					</View>
				</View>
			</View>
		);
	}
}

const Turn = ({number}) => (
	<View style={s.turnContainer}>
		<Text style={s.turno}>{number}</Text>
	</View>
);

const PjNames = ({name1,name2}) => (
	<View style={s.namesContainer}>
		<Text>{name1}</Text>
		<Text>{'Turno'}</Text>
		<Text>{name2}</Text>
	</View>
);

const s = {
	progressContainer:{
		flexDirection:'row',
		padding: appStyle.grid.x2,
		justifyContent: 'space-between',
	},
	namesContainer:{
		marginTop:appStyle.grid.x2,
		paddingHorizontal: appStyle.grid.x2,
		justifyContent: 'space-between',
		flexDirection:'row'
	},
	turno:{
		fontSize: appStyle.font.size.large
	}
};

export default Header;