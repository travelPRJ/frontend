import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView, TextInput, Image, Modal } from "react-native";
import { useState } from "react";

const styles = StyleSheet.create({
    Views: {
        marginTop: 10,
        marginLeft: 30,
    },
    text: {
        marginLeft: 2,
        fontWeight: 'bold',
        fontSize: 15
    },
    box: {
        paddingLeft: 10,
        marginTop: 5,
        borderRadius: 2,
        borderColor: 'black',
        borderWidth: 1,
        width: 240,
        height: 37
    }
});

const Title = ({ onTitleChange }) => {

    const [title, setTitle] = useState('');

    const handleTitleChange = (text) => {
        setTitle(text);
    
        // 부모 컴포넌트로 제목 데이터를 전달
        onTitleChange(text);
      };

    return(
        <View style={styles.Views}>
            <Text style={styles.text}>제목</Text>
            <TextInput 
            style={styles.box} 
            value={title} 
            onChangeText={handleTitleChange}
            placeholder="제목을 입력해주세요"/>
            
        </View>
    );
}

export default Title;