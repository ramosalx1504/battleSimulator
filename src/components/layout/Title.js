import React from 'react';
import {View,Text} from 'native-base';
import { appStyle } from 'simulador/config'; 

const Title = ({text,center}) => (
		<Text style={getStyle(center)}>
			{text}
		</Text>
);

Title.defaultProps = {
	text : 'undefinedTextProp',
	center : false
};

const getStyle = (isCenter) => ({
	color : appStyle.font.color.title,
	fontSize : appStyle.font.size.huge,
	alignSelf: isCenter ? 'center' : 'flex-start'
});

export default Title;