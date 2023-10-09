import { View, TouchableOpacity, StyleSheet, Text, TextInput, Image, Modal, TouchableWithoutFeedback } from "react-native";
import { Calendar } from 'react-native-calendars';
import { useState } from 'react';

import Calen from '../../image/Calendar.png'

const styles = StyleSheet.create({
    Views: {
        marginTop: 10,
        marginLeft: 30,
    },
    modalContainer: {
        width: 248, // 모달의 너비 조정
        left: 60, 
        top: 200, 
        borderRadius: 2,
        borderColor: 'black',
        borderWidth: 1.5,
    },
    calenView: {
        marginTop: 5,
        flexDirection: 'row',
        width: 300,
    },
    text: {
        marginLeft: 1,
        fontSize: 13,
        fontWeight: 'bold'
    },
    put: {
        color: 'black',
        paddingLeft:2,
        paddingRight:2,
        marginRight: 5,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: 'black',
        height: 20,
        width: 75
    },
    imageStyle: {
        marginLeft: 5,
        height: 20,
        width: 20,
        borderWidth: 1,
        borderColor: 'black'
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
    }
});

const CalendarView = () => {

    const [isCalendarVisible, setCalendarVisible] = useState(false);
    const [startDate, setStartDate] = useState(''); // 선택한 시작 날짜
    const [endDate, setEndDate] = useState(''); // 선택한 종료 날짜

    const handleCalendarToggle = () => {
        setCalendarVisible(!isCalendarVisible);
    };

    const handleDayPress = (day) => {
        if (!startDate || endDate) {
          setStartDate(day.dateString);
          setEndDate('');
        } else if (!endDate) {
          setEndDate(day.dateString);
        }
    };

    return (
            <View style={styles.Views}>
                <Text style={styles.text}>전체 여행기간</Text>
                <View style={styles.calenView}>
                    <TextInput style={styles.put} editable={false} selectTextOnFocus={false} value={startDate}></TextInput>
                    <Text>~ </Text>
                    <TextInput style={styles.put} editable={false} selectTextOnFocus={false} value={endDate}></TextInput>
                    <TouchableOpacity onPress={handleCalendarToggle}>
                        <Image source={Calen} style={styles.imageStyle} />
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
            </View>
        
    );
}

export default CalendarView;
