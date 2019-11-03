import React from 'react';
import {Text, View} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import {Link} from 'react-router-native';

const AlbumDetail = props => {
  const {
    headerContentStyle,
    ContentStyle,
    headerTextStyle,
    buttonStyle,
    textStyle,
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{props.record.album.album_name}</Text>
          <Text>{props.record.album.artist_name}</Text>
        </View>
      </CardSection>
      <CardSection>
        <View style={ContentStyle}>
          <Text>Song Genre: </Text>
          <Text>
            {props.record.album.primary_genres.music_genre_list[0]
              ? props.record.album.primary_genres.music_genre_list[0]
                  .music_genre.music_genre_name : 'No genre'}
          </Text>
        </View>
      </CardSection>
      <CardSection>
        <View style={ContentStyle}>
          <Text>Release date: </Text>
          <Text>
            {props.record.album.album_release_date
              ? props.record.album.album_release_date : 'No release date'}
          </Text>
        </View>
      </CardSection>
      <CardSection>
        <Link
          style={buttonStyle}
          to={`/lyrics/track_list/${props.record.album.album_id}`}>
          <Text style={textStyle}>View Album Track List</Text>
        </Link>
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
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
};

export default AlbumDetail;
