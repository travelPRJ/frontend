import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView, TextInput, Image, Modal } from "react-native";
import { useState } from 'react';
import { ip } from "../../src/config/ip";
import axios from "axios";

const styles = StyleSheet.create({
    main: {
        flexDirection:'row',
        margin: 18,
    },
    input: {
        textAlignVertical: 'top',
        width: 265,
        borderColor: 'black',
        borderWidth: 1
    },
    buttonView: {
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        height: 60,
        width: 60
    }
});

const ReplyField = ({ bno, userId }) => {

    const [rcontent, setRContent] = useState('');

    const config = {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
    };

    const handleReply = async () => {
        try {
            const response = await axios.post(
                `${ip}/reply/register`,
                {
                    runo: userId,
                    rbno: bno,
                    rcontent: rcontent,
                },
                config
            );
            console.log(response.data);
            setRContent('');
        } catch (error) {
            console.error('글 작성 중 오류 발생:', error);
        }
    };

    return(
        <View style={styles.main}>
            <TextInput 
            style={styles.input} 
            multiline 
            numberOfLines={3} 
            value={rcontent} 
            onChangeText={text => setRContent(text)}></TextInput>
            <TouchableOpacity onPress={handleReply}>
                <View style={styles.buttonView}>
                    <Text>글 작성</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default ReplyField;