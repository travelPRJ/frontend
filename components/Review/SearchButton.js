import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView, TextInput } from "react-native";
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

const styles = StyleSheet.create({
    view:{
        flexDirection:'row'
    },
    pickerWrapper: {
        width: 115,
        height: 33, // 드롭다운의 높이 조절
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 2,
        marginRight: 5,
        overflow: 'hidden', // 내용을 벗어나는 부분 숨김
        justifyContent: 'center',
    },
    picker: {
        right: 8,
        height: 35,
        width: 125,
    },
    text: {
        marginRight: 5,
        padding: 5,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        width: 160,
        height: 35
    },
    buttonlView: {
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 15,
        padding: 5,
        height: 35,
        width: 60,
        backgroundColor: 'skyblue'
    },
    button:{
        fontWeight: 'bold',
        fontSize: 15
    }
});

const SearchButton = ({ updateCombine }) => {

    const [selectedOption, setSelectedOption] = useState('t'); // Default value: 제목
    const [text, setText] = useState('');

    const handleSearch = () => {
        const CombineText = `${selectedOption}:${text}`;
        updateCombine(CombineText);
        setSelectedOption('t');
        setText('');
    };

    return (                                                        
        <View style={styles.view}>
            <View style={styles.pickerWrapper}>
                <Picker
                    style={styles.picker}
                    selectedValue={selectedOption}
                    onValueChange={(itemValue) => setSelectedOption(itemValue)}
                >
                    <Picker.Item label="제목" value="t" />
                    <Picker.Item label="작성자" value="n" />
                    <Picker.Item label="내용" value="c" />
                    <Picker.Item label="제목+작성자" value="tn" />
                    <Picker.Item label="제목+내용" value="tc" />
                    <Picker.Item label="작성자+내용" value="nc" />
                    <Picker.Item label="제목+작성자+내용" value="tcn" />
                </Picker>
            </View>
            <TextInput style={styles.text} 
                placeholder="검색어를 입력하세요." 
                onChangeText={(value) => setText(value)}
                value={text}
            ></TextInput>
            <TouchableOpacity onPress={handleSearch}>
                <View style={styles.buttonlView}>
                    <Text style={styles.button}>검색</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default SearchButton;