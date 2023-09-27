import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";

import Google from '../../image/google.png'

const styles = StyleSheet.create({
    socialView: {
        borderRadius: 6,
        marginTop:30
    },
    imageStyle: {
        height: 55,
        width: 310,
        resizeMode: "stretch"
    }
});

const GoogleButton = () => {
    return(
        <View style={styles.socialView}>
                <TouchableOpacity>
                    <Image source={Google} style={styles.imageStyle}/>
                </TouchableOpacity> 
            </View> 
    );
}

export default GoogleButton;