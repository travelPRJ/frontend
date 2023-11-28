import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView, TextInput } from "react-native";
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import { ip } from "../../src/config/ip";

const styles = StyleSheet.create({
    main: {
        margin: 30,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonView1: {
        height: 50,
        width: 140,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: 'lightgray',
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 10
    },
    buttonView2: {
        height: 50,
        width: 140,
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

const SendButton = ({ userId, btitle, bcontent, bno }) => {

    const config = {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
    };

    const navigation = useNavigation();

    const handleModify = async () => {
        try {
            const response = await axios.post(`${ip}/board/modify`, {
                bno: bno,
                btitle: btitle,
                bcontent: bcontent,
            }, config);
            console.log("게시물 수정 성공:", response.data);
            navigation.navigate("Reviewer", { userId });
        } catch (error) {
            console.error("게시물 수정 실패:", error);
        }
    };

    return(
        <View style={styles.main}>
            <TouchableOpacity onPress = {() => {navigation.navigate("Reviewer", {userId})}}>
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