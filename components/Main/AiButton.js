// Ai 추천 버튼
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";

const styles = StyleSheet.create({
    buttonlView: {
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 10,
        padding: 1,
        height: 50,
        width: 290,
        backgroundColor: 'skyblue'
    },
    button:{
        fontWeight: 'bold',
        fontSize: 30
    }
});

const AiButton = () =>{
    return(
        <TouchableOpacity>
            <View style={styles.buttonlView}>
                <Text style={styles.button}>AI 추천</Text>
            </View>
        </TouchableOpacity>
    );
}

export default AiButton;