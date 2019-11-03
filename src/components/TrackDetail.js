import React from 'react';
import {Text, View} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const TrackDetail = props => {
  const {headerContentStyle, headerTextStyle} = styles;

  return (
    <Card>
      <CardSection>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{props.track.track.artist_name}</Text>
          <Text>{props.track.track.track_name}</Text>
          <Text>Rating of track: {props.track.track.track_rating}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  ContentStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
};

export default TrackDetail;
