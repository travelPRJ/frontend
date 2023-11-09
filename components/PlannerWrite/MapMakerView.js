import { View, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import React, { useState, useEffect } from 'react';



// 경로 찍는 화면 component

const styles = StyleSheet.create({
    mapview: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 24.5,
        height:310,
        width:310
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    }
});

const MapMakerView = ({ paths }) => {

    const Region = {
        latitude: 37.5665,
        longitude: 126.9780,
        latitudeDelta: 0.1, // 변경
        longitudeDelta: 0.1, // 변경
    };

    useEffect(() => {
        console.log('Paths:', paths);
    }, [paths]);
    

    return(
        <View style={styles.mapview}>
            <MapView
            provider={PROVIDER_GOOGLE} 
            style={styles.map}
            region={Region}
            scrollEnabled={false}
            zoomEnabled={false}
            />
            {paths.map((path, index) => {
                // console.log("Marker Coordinate:", path.lat, path.lng);
                return(
                    <Marker
                        key={index}
                        coordinate={{ 
                            latitude: path.lat, 
                            longitude: path.lng 
                        }}
                    title={path.name}
                    pinColor="red"
                    />
                );  
            })}
        </View>
    );
}

export default MapMakerView;