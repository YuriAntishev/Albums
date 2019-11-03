import React from 'react';
import {View} from 'react-native';
import AlbumList from './src/components/AlbumList';
import AlbumTracks from './src/components/AlbumTracks';
import {NativeRouter, Route, BackButton} from 'react-router-native';

const App = () => (
  <NativeRouter>
    <BackButton>
      <View style={{flex: 1}}>
        <Route exact path="/" component={AlbumList} />
        <Route exact path="/lyrics/track_list/:id" component={AlbumTracks} />
      </View>
    </BackButton>
  </NativeRouter>
);

export default App;
