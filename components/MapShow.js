import React, { Component } from 'react';
import { MapView } from 'react-native';

class MapShow extends Component {
  render() {
    return (
      <MapView
        style={{height: 500, width: 300}}
        showsUserLocation={true}
      />
    );
  }
}

export default MapShow