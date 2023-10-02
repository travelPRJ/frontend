import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";

import Kakao from '../../image/kakao.png'

const styles = StyleSheet.create({
    socialView: {
        borderRadius: 6,
        marginTop:30
    },
    imageStyle: {
        height: 50,
        resizeMode: "stretch"
    }
});

const KakaoButton = () =>{
    return(
        <View style={styles.socialView}>
                <TouchableOpacity>
                    <Image source={Kakao} style={styles.imageStyle}/>
                </TouchableOpacity> 
            </View>
    );
}

export default KakaoButton;