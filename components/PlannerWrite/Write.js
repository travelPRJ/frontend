import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView, TextInput, Image, Modal } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { Calendar } from 'react-native-calendars';
import React, { useState } from "react"
import { useNavigation } from '@react-navigation/native';

import Ping from '../../image/ping.png'
import Calen from '../../image/Calendar.png'

const styles = StyleSheet.create({
    Views: {
        backgroundColor: '#DDDDDD',
        marginTop: 5,
        marginLeft: 25,
        marginRight: 25,
        padding: 5,
    },
    View2: {
        marginTop: 5,
        marginBottom: 20,
        flexDirection: 'row',
        width: 300,
    },
    text: {
        marginLeft: 5,
        fontSize: 13,
        fontWeight: 'bold'
    },
    put: {  // 방문시기 날짜 넣는 공간
        color: 'black',
        backgroundColor: 'white',
        paddingLeft:2,
        paddingRight:2,
        marginRight: 5,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: 'black',
        height: 25,
        width: 78
    },
    put1: {     // 경유지 이름 넣는 공간
        color: 'black',
        backgroundColor: 'white',
        paddingLeft:2,
        paddingRight:2,
        marginRight: 5,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: 'black',
        height: 25,
        width: 160
    },
    put2: {     // 교통수단 이름 넣는 공간
        color: 'black',
        backgroundColor: 'white',
        paddingLeft:2,
        paddingRight:2,
        marginRight: 5,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: 'black',
        height: 25,
        width: 80
    },
    put3: {     // 지역 이름 넣는 공간
        color: 'black',
        backgroundColor: 'white',
        paddingLeft:2,
        paddingRight:2,
        marginRight: 5,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: 'black',
        height: 25,
        width: 80
    },
    imageStyle: {
        marginLeft: 5,
        height: 25,
        width: 25,
        borderWidth: 1,
        borderColor: 'black'
    },
    lineContainer: {
        alignItems: 'center', 
    },
    line: {
        width: '95%',
        borderWidth: 0.2, 
        borderColor: 'gray', 
        borderStyle: 'solid'
    },
    view3: {
        marginTop: 8,
        marginBottom: 8,
        alignItems: 'center', 
        justifyContent: 'center',
    },
    buttonlView: {
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 10,
        padding: 5,
        height: 45,
        width: 200,
        backgroundColor: 'skyblue'
    },
    button:{
        fontWeight: 'bold',
        fontSize: 18
    },
    pickerWrapper: {
        marginTop: 10,
        marginBottom: 10,
        width: 150,
        height: 33, // 드롭다운의 높이 조절
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 2,
        overflow: 'hidden', // 내용을 벗어나는 부분 숨김
        justifyContent: 'center'
    },
    picker: {
        backgroundColor: 'white',
    },
    pickerItem: {
        fontSize: 13,
    },
    closeText: {
        color: 'white',
        fontSize: 14
    },
    closeView: {
        alignItems: 'center', 
        justifyContent: 'center',
        height: 30,
        backgroundColor: 'gray',
        alignItems: 'center', 
    },
    modalContainer: {
        width: 248, // 모달의 너비 조정
        left: 60, 
        top: 200, 
        borderRadius: 2,
        borderColor: 'black',
        borderWidth: 1.5,
    },
});

const transport = ["선택", "시작점", "버스", "기차", "택시", "비행기", "지하철", "자가용", "자전거"];
const location = ["선택", "서울", "경기도", "인천", "강원도",
                    "충청북도", "충청남도", "대전", '세종',
                    "전라북도", "전라남도", "광주", "경상북도",
                    "대구", "경상남도", "울산", "부산", "제주도"];

const Write = () => {

    const navigation = useNavigation();

    const [selectedTransport, setSelectedTransport] = useState("선택");
    const [selectedLocation, setSelectedLocation] = useState("선택");

    const [isCalendarVisible, setCalendarVisible] = useState(false);
    const [firstDate, setStartDate] = useState(''); // 선택한 시작 날짜
    const [lastDate, setEndDate] = useState(''); // 선택한 종료 날짜

    const handleCalendarToggle = () => {
        setCalendarVisible(!isCalendarVisible);
    };

    const handleDayPress = (day) => {
        if (!firstDate || lastDate) {
          setStartDate(day.dateString);
          setEndDate('');
        } else if (!lastDate) {
          setEndDate(day.dateString);
        }
    };

    return(
        <View style={styles.Views}>
            <Text style={styles.text}>경유지</Text>
            <View style={styles.View2}>
                <TextInput style={styles.put1} editable={false} selectTextOnFocus={false}></TextInput>
                <TouchableOpacity onPress = {() => navigation.navigate("GoogleMap")}>
                    <Image source={Ping} style={styles.imageStyle} />
                </TouchableOpacity> 
            </View>
            <Text style={styles.text}>교통수단</Text>
            <View style={styles.pickerWrapper}>
                <Picker
                style={styles.picker}
                selectedValue={selectedTransport}
                onValueChange={(itemValue) => setSelectedTransport(itemValue)}
                >
                {transport.map((item, index) => (
                <Picker.Item label={item} value={item} key={index} style={styles.pickerItem}/>
                ))}
                </Picker>
            </View>
            <Text style={styles.text}>지역</Text>
            <View style={styles.pickerWrapper}>
                <Picker
                style={styles.picker}
                selectedValue={selectedLocation}
                onValueChange={(itemValue) => setSelectedLocation(itemValue)}
                >
                {location.map((item, index) => (
                <Picker.Item label={item} value={item} key={index} style={styles.pickerItem}/>
                ))}
                </Picker>
            </View>
            <Text style={styles.text}>방문 시기</Text>
            <View style={styles.View2}>
                <TextInput style={styles.put} editable={false} selectTextOnFocus={false} value={firstDate}></TextInput>
                <Text>~ </Text>
                <TextInput style={styles.put} editable={false} selectTextOnFocus={false} value={lastDate}></TextInput>
                <TouchableOpacity onPress={handleCalendarToggle}>
                    <Image source={Calen} style={styles.imageStyle}/>
                </TouchableOpacity>
            </View>
            <Modal
                visible={isCalendarVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setCalendarVisible(false)}
                >
                    
                    <View style={styles.modalContainer}>
                    <Calendar
                    onDayPress={handleDayPress}
                    hideExtraDays
                    />
                    <TouchableOpacity onPress={() => setCalendarVisible(false)}>
                    <   View style={styles.closeView}>
                            <Text style={styles.closeText}>창 닫기</Text>
                        </View>
                    </TouchableOpacity>
                    </View>
                </Modal>
            <View style={styles.lineContainer}>
                <View style={styles.line}></View>
            </View>
            <View style={styles.view3}>
                <TouchableOpacity>
                <View style={styles.buttonlView}>
                    <Text style={styles.button}>+ 경로 추가하기</Text>
                </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Write;