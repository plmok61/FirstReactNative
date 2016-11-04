import React from 'react'
import {
  Text,
  View,
  MapView
} from 'react-native';

class Hello extends React.Component {
  static defaultProps = {
    value: 0
  }

  state = {
    value: this.props.value
  }

  render () {
    return (
      <View>
        <Text>Hello World!</Text>
        <MapView
          style={{height: 200, margin: 40}}
          showsUserLocation={true}
        />
      </View>
    )
  }
}

export default Hello