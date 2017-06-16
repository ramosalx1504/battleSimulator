import React from 'react';
import { View, Text } from 'native-base';
import {TouchableHighlight,Image} from 'react-native';
import { appStyle } from 'simulador/config';

import ModalDropdown from 'react-native-modal-dropdown';

const DEMO_OPTIONS_2 = [
  {"name": "Rex", "age": 30},
  {"name": "Mary", "age": 25},
  {"name": "John", "age": 41},
  {"name": "Jim", "age": 22},
  {"name": "Susan", "age": 52},
  {"name": "Brent", "age": 33},
  {"name": "Alex", "age": 16},
  {"name": "Ian", "age": 20},
  {"name": "Phil", "age": 24},
];

class PjSelector extends React.Component {

	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	renderRow(item){
		return (
			<View>
				<Text>{item}</Text>
			</View>
		);
	}
	_dropdown_2_renderRow(rowData, rowID, highlighted) {
    let icon = highlighted ? require('../../../../assets/icon.png') : require('../../../../assets/icon.png');
    let evenRow = rowID % 2;
    return (
      <TouchableHighlight underlayColor='cornflowerblue'>
        <View style={[s.dropdown_2_row, {backgroundColor: evenRow ? 'lemonchiffon' : 'white'}]}>
          <Image style={s.dropdown_2_image}
                 mode='stretch'
                 source={icon}
          />
          <Text style={[s.dropdown_2_row_text, highlighted && {color: 'mediumaquamarine'}]}>
            {`${rowData.name} (${rowData.age})`}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
  _dropdown_2_renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    if (rowID == DEMO_OPTIONS_2.length - 1) return;
    let key = `spr_${rowID}`;
    return (<View style={s.dropdown_2_separator}
                  key={key}
    />);
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
				<ModalDropdown style={s.dropdown_2}
                           textStyle={s.dropdown_2_text}
                           dropdownStyle={s.dropdown_2_dropdown}
                           options={DEMO_OPTIONS_2}
                           renderRow={this._dropdown_2_renderRow.bind(this)}
                           renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => this._dropdown_2_renderSeparator(sectionID, rowID, adjacentRowHighlighted)}
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
	},
	dropdown_2: {
    alignSelf: 'flex-end',
    width: 150,
    top: 32,
    right: 8,
    borderWidth: 0,
    borderRadius: 3,
    backgroundColor: 'red',
  },
  dropdown_2_text: {
    marginVertical: 10,
    marginHorizontal: 6,
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  dropdown_2_dropdown: {
    width: 150,
    height: 300,
    borderColor: 'cornflowerblue',
    borderWidth: 2,
    borderRadius: 3,
  },
  dropdown_2_row: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
  },
  dropdown_2_image: {
    marginLeft: 4,
    width: 30,
    height: 30,
  },
  dropdown_2_row_text: {
    marginHorizontal: 4,
    fontSize: 16,
    color: 'navy',
    textAlignVertical: 'center',
  },
  dropdown_2_separator: {
    height: 1,
    backgroundColor: 'cornflowerblue',
  },
};