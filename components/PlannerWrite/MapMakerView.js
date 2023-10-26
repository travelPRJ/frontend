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

    console.log('Paths:', paths);

    const [mapRegion, setMapRegion] = useState({
        latitude: 37.5665,
        longitude: 126.9780,
        latitudeDelta: 0.0622,
        longitudeDelta: 0.0421,
    });


    // latitude: 36.5002, // 대한민국 중앙 위도
    //             longitude: 127.9835, // 대한민국 중앙 경도
    //             latitudeDelta: 4.0, // 위도 범위 조정
    //             longitudeDelta: 4.0, // 경도 범위 조정
    return(
        <View style={styles.mapview}>
            <MapView
            provider={PROVIDER_GOOGLE} 
            style={styles.map}
            region={mapRegion}
            scrollEnabled={false}
            zoomEnabled={false}
            />
            {paths.map((path, index) => (
                <Marker
                    key={index}
                    coordinate={{ 
                        latitude: path.lat, 
                        longitude: path.lag 
                    }}
                    title={path.name}
                />
            ))}
        </View>
    );
}

export default MapMakerView;