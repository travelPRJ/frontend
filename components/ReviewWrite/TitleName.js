import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView, TextInput } from "react-native";
import { useState } from 'react';

const styles = StyleSheet.create({
    main: {
        marginTop: 30,
        marginLeft: 30,
        width: 200
    },
    text: {
        marginLeft: 5,
        fontSize: 15,
        marginBottom: 10
    },
    input: {
        height: 30,
        width: 200,
        borderColor: 'black',
        borderWidth: 1,
        paddingLeft: 5,
    }
});

const TitleName = ({ setBTitle }) => {

    const handleTitleChange = (text) => {
        setBTitle(text);
    };

    return(
        <View style={styles.main}>
            <Text style={styles.text}>제목</Text>
            <TextInput style={styles.input} placeholder="제목" onChangeText={handleTitleChange}/>
        </View>
    )
}

export default TitleName;