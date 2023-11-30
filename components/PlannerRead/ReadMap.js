import { View, StyleSheet, Text, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps';
import React from 'react';

const busIcon = require('../../image/bus.png');
const taxiIcon = require('../../image/taxi.png');
const airplaneIcon = require('../../image/airplane.jpg');
const bicycleIcon = require('../../image/bicycle.png');
const subwayIcon = require('../../image/subway.png');
const trainIcon = require('../../image/train.png');
const carIcon = require('../../image/car.png');

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
    customMarkerContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    customMarker: {
        width: 15,
        height: 15,
    },
});

const ReadMap = ({ paths }) => {

    const coordinates = paths.map((path) => ({
        latitude: path.lat,
        longitude: path.lng
    }));

    const transportIcons = {
        버스: busIcon,
        택시: taxiIcon,
        비행기: airplaneIcon,
        자전거: bicycleIcon,
        지하철: subwayIcon,
        기차: trainIcon,
        자동차: carIcon,
    };

    const midpoint = (coord1, coord2) => ({
        latitude: (coord1.latitude + coord2.latitude) / 2,
        longitude: (coord1.longitude + coord2.longitude) / 2,
    });  

    return (
        <View style={styles.map}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                    latitude: 37.5665,
                    longitude: 126.9780,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1,
                }}
                scrollEnabled={false}
                zoomEnabled={false}
            >
            {paths && paths.map((path, index) => (
            <React.Fragment key={index}>
              <Marker
                coordinate={{
                  latitude: path.lat,
                  longitude: path.lng,
                }}
                title={path.placeName}
                description={`Transport: ${path.transport}`}
              />
              {index !== 0 && (
                <Marker
                  coordinate={midpoint(coordinates[index - 1], coordinates[index])}
                  title={path.placeName}
                  description={`Transport: ${path.transport}`}
                >
                  <Image source={transportIcons[path.transport]} style={styles.customMarker} />
                </Marker>
              )}
            </React.Fragment>
          ))}
        <Polyline coordinates={coordinates} strokeColor="#FF0000" strokeWidth={2} />
      </MapView>
        </View>
    );
}

export default ReadMap;
