import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView, TextInput, Image, Modal } from "react-native";
import { useState, useEffect } from 'react';

const styles = StyleSheet.create({
    main: {
        marginTop: 30,
        marginLeft: 40,
        marginRight: 40,
    },
    row: {
        flexDirection: 'row'
    },
    nickname: {
        fontSize: 18,
    },
    input: {
        marginTop: 10,
        padding: 5,
        textAlignVertical: 'top',
        borderColor: 'black',
        borderWidth: 1
    }
});

const ReplyArea = ({ rnickname, rcontent, modDate, ChangeReply }) => {

    const ContentChange = (text) => {
        ChangeReply(text);
    }

    return(
        <View style={styles.main}>
            <View style={styles.row}>
                <Text style={styles.nickname}>[ {rnickname} ]</Text>
                <Text style={styles.nickname}>  |  </Text>
                <Text style={styles.nickname}>[ 작성일 : {modDate} ]</Text>
            </View>
            <TextInput
            style={styles.input}
            multiline
            numberOfLines={4}
            value={rcontent}
            onChangeText={ContentChange}
            />
        </View>
    );
}

export default ReplyArea;