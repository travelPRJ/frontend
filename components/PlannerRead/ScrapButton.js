import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView, TextInput, Image, Modal } from "react-native";
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import { ip } from "../../src/config/ip";

// 기숙사 192.168.1.9
// 학교 172.16.104.127
// 학교 10.20.104.162

const styles = StyleSheet.create({
    text:{
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 50
    },
    text2: {
        left: 85,
        flexDirection: 'row',
    },
    button:{
        left: 38,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        width: 80,
        borderRadius: 10,
        borderColor : 'bold',
        borderWidth: 1
    },
    scrap: {
        color: 'white',
        fontSize: 15
    },
    tt1:{
        fontSize: 15,
        color: 'skyblue'
    },
    tt2:{
        fontSize: 15,
    },
    tt3:{
        fontSize: 15,
        color: 'red'
    }
});

const ScrapButton = ({ pno, plannerInfo, plannerLocations }) => {
    const navigation = useNavigation();
    const config = {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
    };

    const del = async () => {
        try {
            // 삭제 요청 보내기
            const response = await axios.post(`${ip}/planner/remove`, {
                pno: pno
            }, config);

            // 서버로부터의 응답을 확인
            console.log(response.data);

            // 삭제 요청 성공 시, 이전 화면으로 돌아가기
            navigation.navigate("Planner");
        } catch (error) {
            console.error('삭제 요청 중 오류 발생:', error);
        }
    };

    return(
        <View style={styles.text}>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.scrap}>+ 스크랩</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.text2}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("PlannerModify", { pno:pno, plannerInfo:plannerInfo, plannerLocations:plannerLocations });
                    }}>
                    <Text style={styles.tt1}>수정</Text>
                </TouchableOpacity>
                <Text style={styles.tt2}>  |  </Text>
                <TouchableOpacity onPress={() => {
                    del();
                }} >
                    <Text style={styles.tt3}>삭제</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ScrapButton;