import React, {Component} from 'react';
import {ScrollView, ActivityIndicator} from 'react-native';
import Header from './header';
import AlbumDetail from './AlbumDetail';
import axios from 'axios';

class AlbumList extends Component {
  state = {
    albums: [],
    heading: 'Albums',
  };
  componentDidMount() {
    axios
      .get(
        'https://api.musixmatch.com/ws/1.1/artist.albums.get?artist_id=1100&apikey=a270f3b3544bc0dcd83b15d9dba398e8',
      )
      .then(response => {
        console.log(response.data);
        this.setState({albums: response.data.message.body.album_list});
      })
      .catch(err => console.log(err));
  }

  renderAlbums() {
    if (this.state.albums === undefined || this.state.albums.length === 0) {
      return (
        <ActivityIndicator
          style={styles.spinnerStyle}
          size="large"
          color="#61dafb"
        />
      );
    } else {
      return this.state.albums.map(album => (
        <AlbumDetail key={album.album.album_id} record={album} />
      ));
    }
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        <Header headerText={'Albums'} />
        {this.renderAlbums()}
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
};

export default AlbumList;
