// 여행 장소 버튼
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";

const styles = StyleSheet.create({
    buttonlView: {
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 10,
        padding: 1,
        height: 160,
        width: 140,
        backgroundColor: 'skyblue'
    },
    button:{
        fontWeight: 'bold',
        fontSize: 30
    }
});

const TravelButton = () =>{
    return(
        <TouchableOpacity>
            <View style={styles.buttonlView}>
                <Text style={styles.button}>여행 장소</Text>
            </View>
        </TouchableOpacity>
    );
}

export default TravelButton;