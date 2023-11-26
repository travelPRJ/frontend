import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView, TextInput, Image, Modal } from "react-native";
import { useState, useEffect } from 'react';
import Title from "../components/ReviewWrite/Title";
import TitleName from "../components/ReviewWrite/TitleName";
import TextArea from "../components/ReviewWrite/TextArea";
import SendButton from "../components/ReviewWrite/SendButton";

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
    },
});

const ReviewWrite = ({route}) => {

    const { userId } = route.params;
    const [btitle, setBTitle] = useState(''); 
    const [bcontent, setBContent] = useState('');
    
    
    return(
        <ScrollView style={styles.main}>
            <Title/>
            <TitleName setBTitle={setBTitle}/>
            <TextArea setBContent={setBContent}/>
            {/* 사진 불러오는 곳 */}
            <SendButton userId={userId} btitle={btitle} bcontent={bcontent}/>
        </ScrollView>
    )
}

export default ReviewWrite;