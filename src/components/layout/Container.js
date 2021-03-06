import React from 'react';
import {View} from 'native-base';
import {appStyle} from 'simulador/config';

const Container = ({ box, center, bordered, bottom, noFlex, children }) => (
	<View style={ getStyle( box, center, bordered, bottom, noFlex) }>
		{
			children
		}
	</View>
);

Container.defaultProps = {
  box: false,
  center: false,
  bordered : false,
  bottom : false,
  noFlex : false
};

const getStyle = ( isBox, isCenter, isBordered, isBottom, noFlex ) => ({
	flex : noFlex ? null : 1,
	marginHorizontal : isBox ? appStyle.grid.x2 : 0,
	marginTop : isBox ? appStyle.grid.x2 : 0,
	marginBottom: isBottom ? appStyle.grid.x2 : 0,
	justifyContent: isCenter ? 'center': null,
	alignItems: isCenter ? 'center': null,
	borderRadius : isBordered ? appStyle.container.border.radius : 0,
	borderWidth : isBordered ? appStyle.container.border.width : 0,
	borderColor : isBordered ? appStyle.container.border.color : 0, 
});

export default Container;