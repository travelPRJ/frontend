import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView, TextInput, Image, Modal } from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

// 경로 찍는 화면 component

const styles = StyleSheet.create({
    mapview: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 24.5,
        backgroundColor: 'blue',
        height:310,
        width:310
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    }
});

const MapMakerView = () => {
    return(
        <View style={styles.mapview}>
            <MapView
            provider={PROVIDER_GOOGLE} 
            style={styles.map}
            initialRegion={{
                latitude: 36.5002, // 대한민국 중앙 위도
                longitude: 127.9835, // 대한민국 중앙 경도
                latitudeDelta: 4.0, // 위도 범위 조정
                longitudeDelta: 4.0, // 경도 범위 조정
            }}
            scrollEnabled={false}
            zoomEnabled={false}
            />
        </View>
    );
}

export default MapMakerView;