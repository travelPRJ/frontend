import { View, StyleSheet, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps';
import React from 'react';

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
});

const ReadMap = ({ paths }) => {

    const coordinates = paths.map((path) => ({
        latitude: path.lat,
        longitude: path.lng
    }));

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
                    <Marker
                        key={index}
                        coordinate={{
                            latitude: path.lat,
                            longitude: path.lng
                        }}
                        title={path.placeName}
                        description={`Transport: ${path.transport}`}
                    />
                ))}
                 <Polyline
                    coordinates={coordinates}
                    strokeColor="#FF0000"
                    strokeWidth={2}
                />
            </MapView>
        </View>
    );
}

export default ReadMap;
