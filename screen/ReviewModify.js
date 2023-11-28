import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView, TextInput, Image, Modal } from "react-native";
import { useState, useEffect } from 'react';
import ReviewModifyText from "../components/ReviewModify/ReviewModifyText";
import Title from "../components/ReviewModify/Title";
import TextArea from "../components/ReviewModify/TextArea";
import SendButton from "../components/ReviewModify/SendButton";

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
    },
    
});

const ReviewModify = ({route}) => {

    const { boardInfo } = route.params;
    const { userId } = route.params;
    const [bno, setBno] = useState('');
    const [btitle, setTitle] = useState('');
    const [bcontent, setContent] = useState('');

    const { bno: boardNo, btitle: boardTitle, bcontent: boardContent } = boardInfo;

    useEffect(() => {
        setBno(boardNo);
        setTitle(boardTitle);
        setContent(boardContent);
    }, [boardNo, boardTitle, boardContent]);

    const TitleChange = (newTitle) => {
        setTitle(newTitle);
    };

    const ContentChange = (newContent) => {
        setContent(newContent);
    };
    

    return(
        <ScrollView style={styles.main}>
            <ReviewModifyText/>
            <Title title={btitle} onTitleChange={TitleChange}/>
            <TextArea content={bcontent} onContentChange={ContentChange}/>
            <SendButton bcontent={bcontent} bno={bno} btitle={btitle} userId={userId}/>
        </ScrollView>
    );
}

export default ReviewModify;