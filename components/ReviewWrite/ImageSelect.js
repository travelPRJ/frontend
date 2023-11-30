import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView, TextInput, Image } from "react-native";
import { useState } from 'react';
import { launchImageLibrary, launchCamera, ImagePicker } from 'react-native-image-picker';

const styles = StyleSheet.create({
    main: {
        marginTop: 20,
    },
    imageContainer: {
        width: 200,
        height: 200,
        borderRadius: 10,
        overflow: 'hidden',
      },
      selectedImage: {
        width: '100%',
        height: '100%',
      },
      selectButton: {
        marginLeft: 30,
        width: 150,
        padding: 5,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1
      },
      buttonText: {
        color: 'black',
        fontSize: 16,
      },
});

const ImageSelect = ({ onImageSelect }) => {
    const [selectedImage, setSelectImage] = useState('');

    const ImageSelect = () => {

        const options = {
            storageOptions: {
                path: 'image',
            },
        };

        launchImageLibrary(options, (response) => {
            // setSelectImage(response.assets[0].uri);
            console.log("이미지:", response);
        });
    };

    return(
        <View style={styles.main}>
            <TouchableOpacity style={styles.selectButton} onPress={ImageSelect}>
                <Text style={styles.buttonText}>이미지 선택</Text>
            </TouchableOpacity>
            
        </View>
    );
}

export default ImageSelect;