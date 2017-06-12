import { Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const gridSize = 8;

const widthPercentage = (number) => {
  return number * deviceWidth /100;
}

export default {
  font: {
    size: {
      small: 11,
      default: 13,
      big: 15,
      large: 17,
      huge: 20,
    },
    color : {
      primary : 'black',
      secondary : 'white',
      title : 'black'
    }
  },
  colors: {
    primary: 'rgba(0,30,79,0.6)',
    dark: 'rgba(0,0,0,0.2)',
    lightText: '#FAFAFA',
    background: '#F5FCFF',
    darkGray: '#333333',
    brandPrimary: '#3F51B5',
    brandInfo: '#12ADF2',
    brandSuccess: '#5cb85c',
    brandDanger: '#d9534f',
    brandWarning: '#f0ad4e',
    brandSidebar: '#252932',
    sith: 'rgba(255,19,19,0.4)',
    jedi: 'rgba(41,208,254,0.4)',
    jediGreen : 'rgba(99,229,71,0.9)',
    green:'green',
    red:'red'
  },
  grid: {
    x1: gridSize * 1,
    x2: gridSize * 2,
    x3: gridSize * 3,
    x4: gridSize * 4,
    x5: gridSize * 5,
    x6: gridSize * 6,
    x7: gridSize * 7,
    x8: gridSize * 8,
    x9: gridSize * 9,
    x10: gridSize * 10,
    x12: gridSize * 12,
    x14: gridSize * 14,
    x16: gridSize * 16,
  },
  dimensions: {
    touchableHeight: 48,
    visibleButtonHeight: 36,
    width : deviceWidth,
    height : deviceHeight,
    widthPercentage: widthPercentage
  },
  router:{
    paddingTop:54,
    backgroundColor:'lightgray'
  },
  container : {
    center:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    border:{
      radius : 4,
      width : 1,
      color: 'lightgray'
    }
  },
  border:{
      radius : 4,
      width : 1,
      color: 'lightgray'
  }
};