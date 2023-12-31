import { View, TouchableOpacity, StyleSheet, Text, TextInput, Image, Modal, TouchableWithoutFeedback } from "react-native";
import { Calendar } from 'react-native-calendars';
import { useState, useEffect } from 'react';

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
        width: 77,
        textAlign: 'center'
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

const CalendarView = ({ onDateChange, day }) => {
    const [isCalendarVisible, setCalendarVisible] = useState(false);
    const [pstart, setStartDate] = useState(''); // 선택한 시작 날짜
    const [pend, setEndDate] = useState(''); // 선택한 종료 날짜

    const handleCalendarToggle = (input) => {
        if (input === 'start' && pstart !== '') {
            setStartDate('');
        }  
        setActiveInput(input);
        setCalendarVisible(true);
    };

    const handleDayPress = (day) => {
        if (activeInput === 'start') {
          setStartDate(day.dateString);
        } else if (activeInput === 'end') {
          setEndDate(day.dateString);
        }
        setCalendarVisible(false);
        setActiveInput(null);
    };

    const [activeInput, setActiveInput] = useState(null);

    useEffect(() => {
        onDateChange({ pstart, pend });
    }, [pstart, pend]);

    return (
        <View style={styles.Views}>
            <Text style={styles.text}>전체 여행기간</Text>
            <View style={styles.calenView}>
                <TouchableOpacity
                   onPress={() => handleCalendarToggle('start')}
                >
                    <TextInput
                        style={styles.put}
                        editable={false}
                        selectTextOnFocus={false}
                        value={day.pstart}
                    />
                </TouchableOpacity>
                <Text>~ </Text>
                <TouchableOpacity
                    onPress={() => handleCalendarToggle('end')}
                >
                    <TextInput
                        style={styles.put}
                        editable={false}
                        selectTextOnFocus={false}
                        value={day.pend}
                    />
                </TouchableOpacity>
            </View>
            <Modal
                visible={isCalendarVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => {
                    setCalendarVisible(false);
                    setActiveInput(null);
                }}
            >
                <View style={styles.modalContainer}>
                    <Calendar
                        onDayPress={handleDayPress}
                        hideExtraDays
                        minDate={pstart}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            setCalendarVisible(false);
                            setActiveInput(null);
                        }}
                    >
                        <View style={styles.closeView}>
                            <Text style={styles.closeText}>창 닫기</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
}

export default CalendarView;