import React from 'react';
import { View, Text } from 'native-base';
import {TouchableHighlight,Image} from 'react-native';
import { appStyle } from 'simulador/config';

import ModalDropdown from 'react-native-modal-dropdown';

import pjs from 'simulador/src/data/pjs.json';
import imagenes from 'simulador/src/data/imagenes';


class PjSelector extends React.Component {

	constructor(props) {
	  super(props);
	  this.data = this.extract(this.props.data);
	}

  extract( data ){
    return pjs.filter((value) => {
      return value.orden === data;
    });
  }

	renderRow(rowData, rowID, highlighted) {
    let icon = highlighted ? require('../../../../assets/icon.png') : require('../../../../assets/icon.png');
    let evenRow = rowID % 2;
    return (
      <TouchableHighlight underlayColor='cornflowerblue'>
        <View style={{...s.dropdown_2_row, ...{backgroundColor: evenRow ? 'lightgray' : 'white'}}}>
          <Image style={s.dropdown_2_image}
                 mode='stretch'
                 source={imagenes[rowData.id]}
          />
          <Text style={{...s.dropdown_2_row_text}}>
            {`${rowData.nombre}`}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }

  renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    if (rowID == this.data.length - 1) return;
    let key = `spr_${rowID}`;
    return (<View style={s.separator}
                  key={key}
    />);
  }
	render(){
		const {data,onSelect,selected} = this.props;
		return (
			<View style={s.container}>
				<ModalDropdown 
                       onSelect={onSelect}
                       style={s.dropdown_2}
                       textStyle={s.dropdown_2_text}
                       dropdownStyle={s.dropdown_2_dropdown}
                       options={this.data}
                       renderRow={this.renderRow.bind(this)}
                       renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => this.renderSeparator(sectionID, rowID, adjacentRowHighlighted)}
        >
          <Text style={{color:'white'}}>{this.getDataToShow()}</Text>
        </ModalDropdown>
			</View>
		);
	}

  getDataToShow(){
    if(this.props.selected == null ){
      return 'Selecccione un Personaje...';
    }else{
      return this.props.selected.nombre
    }
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
    padding : appStyle.grid.x2,
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
    width: appStyle.dimensions.width - appStyle.grid.x4,
    height :60*3+5,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
  },
  dropdown_2_row: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
  },
  dropdown_2_image: {
    marginLeft: 8,
    width: 40,
    height: 40,
    borderRadius:20
  },
  dropdown_2_row_text: {
    marginHorizontal: 16,
    fontSize: 16,
    color: 'navy',
    textAlignVertical: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: 'cornflowerblue',
  },
};