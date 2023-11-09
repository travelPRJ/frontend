import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView } from "react-native";
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from "react";

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        marginLeft: 25,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between', // 좌우로 간격을 벌리도록 설정
        width: '86%', // 버튼들의 폭을 조정 
    },
    buttonlView1: {
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 5,
        height: 50,
        width: 150,
        backgroundColor: 'lightgray'
    },
    buttonlView2: {
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 5,
        height: 50,
        width: 150,
        backgroundColor: 'skyblue'
    },
    button:{
        fontWeight: 'bold',
        fontSize: 20
    }
});

const Buttons = ({ paths, title, selectedDates }) => {
    const [buttonColor, setButtonColor] = useState('skyblue');

    useEffect(() => {
        const timer = setTimeout(() => {
            setButtonColor('skyblue');
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, [buttonColor]);

    const handleWrite = () => {
        if (!title || !selectedDates.startDate || !selectedDates.endDate) {
            setButtonColor('red');
        } else {
            // 작성 버튼 눌렀을 때 해야 할 동작
        }
    };

    // 테스트용 
    const puno = 5;

    const navigation = useNavigation();

    console.log("경로 데이터들2 : ", paths);
    console.log("제목 : ", title);
    console.log("날짜 : ", selectedDates);

    return(
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress = {() => {navigation.navigate("Planner")}}>
                <View style={styles.buttonlView1}>
                    <Text style={styles.button}>취소</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleWrite}>
                <View style={{ ...styles.buttonlView2, backgroundColor: buttonColor }}>
                    <Text style={styles.button}>작성</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Buttons;