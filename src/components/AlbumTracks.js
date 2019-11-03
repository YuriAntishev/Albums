import React, {Component} from 'react';
import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import Header from './header';
import TrackDetail from './TrackDetail';
import axios from 'axios';
import {Link} from 'react-router-native';

class AlbumTracks extends Component {
  state = {
    tracks: [],
    heading: 'Tracks',
  };
  componentDidMount() {
    axios
      .get(
        `https://api.musixmatch.com/ws/1.1/album.tracks.get?album_id=${
          this.props.match.params.id
        }&apikey=a270f3b3544bc0dcd83b15d9dba398e8`,
      )
      .then(response => {
        console.log(response.data);
        this.setState({tracks: response.data.message.body.track_list});
      })
      .catch(err => console.log(err));
  }

  renderTracks() {
    if (this.state.tracks === undefined || this.state.tracks.length === 0) {
      return (
        <ActivityIndicator
          style={styles.spinnerStyle}
          size="large"
          color="#61dafb"
        />
      );
    } else {
      const track_list = this.state.tracks.map(track => (
        <TrackDetail key={track.track.track_id} track={track} />
      ));
      return (
        <View>
          <Link style={styles.buttonStyle} to={'/'}>
            <Text style={styles.textStyle}>Go Back</Text>
          </Link>
          {track_list}
        </View>
      );
    }
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        <Header headerText={'Tracks'} />
        {this.renderTracks()}
      </ScrollView>
    );
  }
}

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '70%',
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
    marginTop: 3,
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

export default AlbumTracks;
