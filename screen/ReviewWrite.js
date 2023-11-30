import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView, TextInput, Image, Modal } from "react-native";
import { useState, useEffect } from 'react';
import Title from "../components/ReviewWrite/Title";
import TitleName from "../components/ReviewWrite/TitleName";
import TextArea from "../components/ReviewWrite/TextArea";
import SendButton from "../components/ReviewWrite/SendButton";
import ImageSelect from "../components/ReviewWrite/ImageSelect";

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
    const [selectedImageUri, setSelectedImageUri] = useState(null);

    const handleImageSelect = (uri) => {
        setSelectedImageUri(uri);
    };
    
    return(
        <ScrollView style={styles.main}>
            <Title/>
            <TitleName setBTitle={setBTitle}/>
            <TextArea setBContent={setBContent}/>
            <ImageSelect onImageSelect={handleImageSelect}/>
            <SendButton userId={userId} btitle={btitle} bcontent={bcontent}/>
        </ScrollView>
    )
}

export default ReviewWrite;