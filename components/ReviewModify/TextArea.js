import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView, TextInput } from "react-native";
import { useState } from 'react';

const styles = StyleSheet.create({
    main: {
        marginTop: 20,
        alignItems: 'center',
    },
    input: {
        padding: 5,
        textAlignVertical: 'top',
        width: 300,
        height: 300,
        borderColor: 'black',
        borderWidth: 1
    }
});

const TextArea = ({ content, onContentChange }) => {
    
    const ContentChange = (text) => {
        onContentChange(text);
    }
    
    return(
        <View style={styles.main}>
            <TextInput 
            style={styles.input}
            multiline
            numberOfLines={100}
            value={content}
            onChangeText={ContentChange}/>
        </View>
    )
}

export default TextArea;