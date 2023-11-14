import { View, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps';
import React, { useState, useEffect } from 'react';



// 경로 찍는 화면 component

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
});

const MapMakerView = ({ paths }) => {

    const Region = {
        latitude: 37.5665,
        longitude: 126.9780,
        latitudeDelta: 0.1, // 변경
        longitudeDelta: 0.1, // 변경
    };

    const coordinates = paths.map((path) => ({
        latitude: path.lat,
        longitude: path.lng
    }));

    useEffect(() => {
        console.log('Paths:', paths);
    }, [paths]);
    

    return(
        <MapView
            provider={PROVIDER_GOOGLE} 
            style={styles.map}
            region={Region}
            scrollEnabled={false}
            zoomEnabled={false}
            >
            {paths.map((path, index) => {
                return(
                    <Marker
                        key={index}
                        coordinate={{ 
                            latitude: path.lat, 
                            longitude: path.lng 
                        }}
                    title={path.placeName}
                    pinColor="red"
                    />
                );  
            })}
            <Polyline
                    coordinates={coordinates}
                    strokeColor="#FF0000"
                    strokeWidth={2}
            />
        </MapView>
    );
}

export default MapMakerView;