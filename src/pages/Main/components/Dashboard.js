import React from 'react';
import { View, Text, Button, Icon } from 'native-base';
import { appStyle } from 'simulador/config';

/**
 * Custom Components
 */ import PjViewer from './PjsViewer';

const Dashboard = ({onNewBattlePress,onMoreInfoPress,onOrdenJediPress,onOrdenSithPress}) => (
	<View style={s.container}>
		<Button onPress={onNewBattlePress} block>
			<Text>
				Nueva Batalla
			</Text>
		</Button>
		<PjViewer 
			onJediPress={onOrdenJediPress}
			onShitPress={onOrdenSithPress}
		/>
		<Button bordered onPress={onMoreInfoPress} block>
			<Text>
				Acerca del Simulador
			</Text>
		</Button>
	</View>
); 

export default Dashboard;

const s = {
	container : {
		flex:1,
		justifyContent: 'space-around',
		paddingBottom: appStyle.grid.x2
	}
};