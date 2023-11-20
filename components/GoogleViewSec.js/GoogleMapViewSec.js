import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView, TextInput, Image, Modal } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import React, { useState, useEffect } from 'react';

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
        zIndex:0
    },
});

const GoogleMapViewSec = ({ selectedLocation }) => {

  // 초기 구글 맵 위도, 경도 위치
  const initialRegion = {
    latitude: 37.5665,
    longitude: 126.9780,
    latitudeDelta: 0.0622,
    longitudeDelta: 0.0421,
  };

  const [region, setRegion] = useState(initialRegion);

  useEffect(() => {
    if (selectedLocation) {
      // 선택한 장소 정보를 기반으로 지도 위치 업데이트
      setRegion({
        latitude: selectedLocation.lat,
        longitude: selectedLocation.lng,
        latitudeDelta: 0.0622,
        longitudeDelta: 0.0421,
      });
    }
  }, [selectedLocation]);
  
  return(
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
      >
      {selectedLocation && (
        <Marker
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
          title={selectedLocation.name}
        />
      )}
      </MapView>
  );
}

export default GoogleMapViewSec;