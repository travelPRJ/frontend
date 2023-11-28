import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView, TextInput, Image, Modal } from "react-native";
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import { ip } from "../../src/config/ip";

const styles = StyleSheet.create({
    text1: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'skyblue'
    },
    text2: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    text3: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'red'
    },
    buttonrow: {
        left: 90,
        flexDirection: 'row'
    }
});

const Butt = ({ boardInfo, userId }) => {

    const config = {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
    };

    const isOwner = userId === boardInfo.buno;
    const navigation = useNavigation();

    const handleDelete = async () => {
        try {
            const response = await axios.post(`${ip}/board/remove`, {
                bno: boardInfo.bno
            }, config);

            console.log(response.data);
            navigation.navigate("Reviewer", { userId });

        } catch (error) {
            console.error('삭제 중 오류 발생:', error);
        }
    };

    return(
        <View style={styles.buttonrow}>
            { isOwner ? (
                <>
                <TouchableOpacity onPress={() => { navigation.navigate("ReviewModify", { boardInfo:boardInfo, userId:userId });}}>
                    <Text style={styles.text1}>수정  </Text>
                </TouchableOpacity>
                    <Text style={styles.text2}> | </Text>
                <TouchableOpacity onPress={handleDelete}>
                    <Text style={styles.text3}>  삭제</Text>
                </TouchableOpacity>
                </>
            ) : null}
        </View>
    )
}

export default Butt;