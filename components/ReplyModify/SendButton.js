import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView, TextInput } from "react-native";
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import { ip } from "../../src/config/ip";

const styles = StyleSheet.create({
    main: {
        marginTop: 30,
        marginRight: 40,
        marginLeft: 40,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonView1: {
        height: 50,
        width: 130,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: 'lightgray',
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 10
    },
    buttonView2: {
        height: 50,
        width: 130,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: 'skyblue',
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 10
    },
    button:{
        fontWeight: 'bold',
        fontSize: 20
    }
});

const SendButton = ({userId, bno, rno, rcontent}) => {

    const config = {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
    };

    const navigation = useNavigation();
    
    const handleModify = async () => {
        try {
            // 여기에서 수정 요청을 보내는 로직 작성
            await axios.post(`${ip}/reply/modify`, {
                rno: rno,
                rcontent: rcontent,
            }, config);

            // 수정 완료 후 ReviewRead 화면으로 이동
            navigation.navigate("ReviewRead", { userId, bno });
        } catch (error) {
            console.error('댓글 수정 중 에러 발생:', error);
        }
    };

    return(
        <View style={styles.main}>
            <TouchableOpacity onPress = {() => {navigation.navigate("ReviewRead", {userId, bno})}}>
                <View style={styles.buttonView1}>
                    <Text style={styles.button}>취소</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleModify}>
                <View style={styles.buttonView2}>
                    <Text style={styles.button}>수정</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default SendButton;