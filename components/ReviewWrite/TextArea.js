import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView, TextInput } from "react-native";
import { useState } from 'react';

const styles = StyleSheet.create({
    main: {
        marginTop: 20,
        alignItems: 'center',
    },
    input: {
        width: 300,
        height: 300,
        borderColor: 'black',
        borderWidth: 1
    }
});

const TextArea = ({ setBContent }) => {
    const handleContentChange = (text) => {
        setBContent(text);
    };
    return(
        <View style={styles.main}>
            <TextInput 
            style={styles.input}
            multiline
            numberOfLines={100}
            onChangeText={handleContentChange}/>
        </View>
    )
}

export default TextArea;