import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Google_Places_API } from "../../src/config";
import { useState, useEffect, useRef } from 'react';


const styles = StyleSheet.create({
  container: {
    // 전체 컨테이너 스타일
    width: 360, 
  },
  textInputContainer: {
    // 입력란 컨테이너 스타일
    margin: 2,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    width: 355, 
  },
  listView: {
    // 자동완성 목록 스타일
    backgroundColor: 'lightgray',
    maxHeight: 200, 
  }
});

const GoogleText = ({ onPlaceSelect }) => {

  const handlePlaceSelect = (data, details) => {
    if (details) {
      // 추출한 장소 정보 전송
      onPlaceSelect({
        name: details.name,
        lat: details.geometry.location.lat,
        lng: details.geometry.location.lng,
      });
    }
  };
    return(
      <View>
        <GooglePlacesAutocomplete
        placeholder="장소를 검색해보세요!"
        query={{
          key: Google_Places_API,
          language: "ko",
          components: "country:kr",
        }}
        fetchDetails={true}
        onPress={(data, details = null) => {
          handlePlaceSelect(data, details);
        }}
        onFail={(error) => console.log(error)}
        onNotFound={() => console.log("no results")}
        enablePoweredByContainer={false}
        styles={styles}
      />
    
      </View>
    );
}

export default GoogleText;