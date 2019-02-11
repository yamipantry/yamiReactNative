import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  KeyboardAvoidingView,
} from 'react-native';
import { connect } from 'react-redux';
import { yamiDinners as yamiDinnerThunk } from '../client/store';

class MapComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: null,
      lng: null,
      create: '',
    };
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(
      pos => {
        this.setState({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      err => {
        console.log(err);
      }
    );
  }
  async componentDidMount() {
    await this.getLocation();
    this.props.getDinners();
  }

  render() {
    console.log(this.props);
    const dinners = this.props.dinners || [];
    const lat = this.state.lat;
    const lng = this.state.lng;
    if (!lat && !lng) {
      return (
        <View>
          <Text>.... Loading</Text>
        </View>
      );
    }

    return (
      <KeyboardAvoidingView>
        <View style={style.mapContainer}>
          <MapView
            style={style.map}
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            region={{
              latitude: lat,
              longitude: lng,
              latitudeDelta: 0.065,
              longitudeDelta: 0.06,
            }}
          >
            {dinners.map(dinner => {
              return (
                <Marker
                  key={dinner.id}
                  title={dinner.name}
                  coordinate={{ latitude: dinner.lat, longitude: dinner.lng }}
                  description={dinner.description}
                  onPress={() => {
                    this.setState({
                      create: '35,-122,1-19-19',
                    });
                  }}
                />
              );
            })}
          </MapView>

          <Button
            title="Chat with a Host"
            onPress={() => {
              this.props.navigation.push('messageTest', {
                name: this.state.create,
              });
            }}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const style = StyleSheet.create({
  mapContainer: {
    width: '100%',
    height: '94%',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

const mapDispatchToProps = dispatch => {
  return {
    getDinners: () => {
      dispatch(yamiDinnerThunk());
    },
  };
};

const mapStateToProps = state => {
  return {
    dinners: state.yamiDinners,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapComponent);
