import React from 'react';
import {Text, View} from 'react-native';

const Header = props => {
  const {textStyle, viewStyle} = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#282c34',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    paddingTop: 5,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    color: '#61dafb',
    fontSize: 20,
  },
};

export default Header;
