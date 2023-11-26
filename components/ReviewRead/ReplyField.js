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

const ReplyField = () => {
    return(
        <View style={styles.main}>
            <TextInput style={styles.input} multiline numberOfLines={3} ></TextInput>
            <TouchableOpacity>
                <View style={styles.buttonView}>
                    <Text>글 작성</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default ReplyField;