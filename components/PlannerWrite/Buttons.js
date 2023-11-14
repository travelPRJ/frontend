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

// 기숙사 192.168.1.9

const Buttons = ({ paths, ptitle, selectedDates }) => {

    // 테스트용 회원 번호
    const puno = 1;

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
                puno: puno, // 원하는 값으로 변경
                ptitle: ptitle,
                pstart: selectedDates.pstart,
                pend: selectedDates.pend
            };

            axios.post('http://192.168.1.9:5000/planner/register', postData, config)
            .then(response => {
                // 서버로부터의 응답을 처리
                const ppno = response.data.ppno; // ppno 값은 서버에서 받은 값으로 수정해야 함
                console.log("서버 응답: ", response.data);
    
                // ppno를 사용하여 다른 데이터를 서버에 보냅니다.
                const locationData = paths.map(path => ({
                    ppno: response.data,
                    placeName: path.placeName,
                    transport: path.transport,
                    region: path.location,
                    lstart: path.lstart,
                    lend: path.lend,
                    lat: path.lat,
                    lng: path.lng
                }));
    
                axios.post('http://192.168.1.9:5000/plannerloc/register', locationData, config)
                .then(locationResponse => {
                    // 서버로부터의 위치 데이터 응답을 처리
                    console.log("서버 응답 (위치 데이터):", locationResponse.data);
                })
                .catch(locationError => {
                    // 위치 데이터 요청 중 오류 처리
                    console.error("오류 발생 (위치 데이터):", locationError);
                });
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
                    navigation.navigate("Planner"); // Planner 화면으로 이동
                }}>
                <View style={{ ...styles.buttonlView2, backgroundColor: buttonColor }}>
                    <Text style={styles.button}>작성</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Buttons;