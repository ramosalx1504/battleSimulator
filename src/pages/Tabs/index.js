import React from 'react';

import { View, Tab, Tabs } from 'native-base';

import { PjsList } from 'simulador/src/components';

class CharactersTabs extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			activeTab : props.origin === 'Jedi' ? 0 : 1
		};
	}

	render() {
		return (
			<View style={s.container}>
				<Tabs initialPage={ this.state.activeTab }>
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