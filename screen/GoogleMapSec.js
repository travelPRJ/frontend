import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView, TextInput, Image, Modal } from "react-native";
import GoogleMapViewSec from '../components/GoogleViewSec.js/GoogleMapViewSec';
import GoogleTextSec from '../components/GoogleViewSec.js/GoogleTextSec';
import SelectButtonSec from '../components/GoogleViewSec.js/SelectButtonSec';
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

const GoogleMapSec = ({ route }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const { pno } = route.params;

  return(
    <View style={styles.view}>
      <View style={styles.googleText}> 
        <GoogleTextSec onPlaceSelect={setSelectedLocation}/>
      </View>
      <GoogleMapViewSec selectedLocation={selectedLocation}/>
      <SelectButtonSec selectedLocation={selectedLocation} pno={pno}/>
    </View>
  );
}

export default GoogleMapSec;