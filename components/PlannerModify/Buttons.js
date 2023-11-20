import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView } from "react-native";
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from "react";
import { ip } from "../../src/config/ip";

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

// 기숙사 192.168.1.9

const Buttons = ({ paths, ptitle, selectedDates, pno }) => {

    const postnumber = pno;

    const config = {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
    };

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
        if (!ptitle || !selectedDates.pstart || !selectedDates.pend) {
            setButtonColor('red');
        } else {
            // 서버로 데이터를 POST하는 요청
            const postData = {
                pno: postnumber,
                ptitle: ptitle,
                pstart: selectedDates.pstart,
                pend: selectedDates.pend
            };

            // modify로 바꾸기
            axios.post(`${ip}/planner/modify`, postData, config)
                .then(response => {

                const locationData = paths.map(path => ({
                    ppno: postnumber,
                    placeName: path.placeName,
                    transport: path.transport,
                    region: path.location,
                    lstart: path.lstart,
                    lend: path.lend,
                    lat: path.lat,
                    lng: path.lng
                }));

                axios.post(`${ip}/plannerloc/modify/${postnumber}`, locationData, config)
                    .then(locationResponse => {
                    // 서버로부터의 위치 데이터 응답을 처리
                    console.log("서버 응답 (위치 데이터):", locationResponse.data);
                    })
                    .catch(locationError => {
                    // 위치 데이터 요청 중 오류 처리
                        console.error("오류 발생 (위치 데이터):", locationError);
                    });

                navigation.navigate("Planner");
            })
            .catch(error => {
                // 오류 처리
                console.error("오류 발생: ", error);
            });
        }
    };

    const navigation = useNavigation();

    return(
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress = {() => {navigation.navigate("Planner")}}>
                <View style={styles.buttonlView1}>
                    <Text style={styles.button}>취소</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                    handleWrite(); // 작성 버튼 누른 후 데이터 저장
                }}>
                <View style={{ ...styles.buttonlView2, backgroundColor: buttonColor }}>
                    <Text style={styles.button}>수정</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Buttons;