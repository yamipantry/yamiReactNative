import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { View, StyleSheet } from 'react-native';

class MapComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      yamiDinners: [],
    };
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(
      pos => {
        return {
          lat_test: pos.coords.latitude,
          long_test: pos.coords.longitude,
        };
      },
      err => {
        console.log(err);
      }
    );
  }

  render() {
    return (
      <View style={style.mapContainer}>
        <MapView
          style={style.map}
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          region={{
            latitude: 37.58825,
            longitude: -122.0432,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          {this.state.yamiDinners.map(dinner => {
            return (
              <Marker
                key={dinner.id}
                title={dinner.title}
                coordinate={dinner.cord}
                description={dinner.description}
                onPress={() => {
                  console.log('this is being pressed', dinner.title);
                }}
              />
            );
          })}
        </MapView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  mapContainer: {
    width: '100%',
    height: '90%',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default MapComponent;
