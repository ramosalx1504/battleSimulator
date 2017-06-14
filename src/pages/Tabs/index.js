import React from 'react';

import { View, Tab, Tabs } from 'native-base';

import { PjsList } from 'simulador/src/components';

class CharactersTabs extends React.Component {

	render() {
		return (
			<View style={s.container}>
				<Tabs initialPage={ this.props.origin === 'Jedi' ? 0 : 1 }>
					<Tab heading='Orden Jedi'>
						<PjsList data='Jedi' />
					</Tab>
					<Tab heading='Orden Sith'>
						<PjsList data='Sith'/>
					</Tab>
				</Tabs>
			</View>
		);
	}
}

const s = {
	container:{
		flex:1
	}
};


export default CharactersTabs;