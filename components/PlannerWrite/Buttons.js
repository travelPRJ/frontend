import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView } from "react-native";

import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    buttonContainer: {
        marginLeft: 28,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between', // 좌우로 간격을 벌리도록 설정
        width: '85%', // 버튼들의 폭을 조정 
    },
    buttonlView: {
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 5,
        padding: 5,
        height: 50,
        width: 150,
        backgroundColor: 'skyblue'
    },
    button:{
        fontWeight: 'bold',
        fontSize: 20
    }
});

const Buttons = (props) => {

    const navigation = useNavigation();

    return(
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress = {() => {navigation.navigate("Planner")}}>
                <View style={styles.buttonlView}>
                    <Text style={styles.button}>취소</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity >
                <View style={styles.buttonlView}>
                    <Text style={styles.button}>작성</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Buttons;