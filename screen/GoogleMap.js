import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView, TextInput, Image, Modal } from "react-native";
import GoogleMapView from "../components/GoogleView/GoogleMapView";
import GoogleText from "../components/GoogleView/GoogleText";
import SelectButton from "../components/GoogleView/SelectButton";
import { useState } from 'react';

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    googleText: {
      position: 'absolute',
      top: 0, 
      left: 0, 
      zIndex: 2, 
      flex: 0.5,
    },
});

const GoogleMap = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  return(
    <View style={styles.view}>
      <View style={styles.googleText}> 
        <GoogleText onPlaceSelect={setSelectedLocation}/>
      </View>
      <GoogleMapView selectedLocation={selectedLocation}/>
      <SelectButton/>
    </View>
  );
}

export default GoogleMap;