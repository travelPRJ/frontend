import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView, TextInput, Image, Modal } from "react-native";
import { useState, useEffect } from 'react';
import ReplyText from "../components/ReplyModify/ReplyText";
import ReplyArea from "../components/ReplyModify/ReplyArea";
import SendButton from "../components/ReplyModify/SendButton";

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
    },
});

const ReplyModify = ({ route }) => {

    const { reply } = route.params;
    const { bno } = route.params;
    const { userId } = route.params;
    const [rno, setRno] = useState('');
    const [rcontent, setRcontent] = useState('');
    const [rnickname, setRnickname] = useState('');
    const [modDate, setModDate] = useState('');

    //  LOG  댓글 수정: {"modDate": "2023-11-27", "rbno": 4, "rcontent": "나중에 한번 가봐야겠네요", 
    // + "rdelete": 0, "regDate": "2023-11-27", "rnickname": "user5", "rno": 3, "runo": 6}

    useEffect(() => {
        if(reply) {
            const { rno, rcontent, rnickname, modDate } = reply;
            setRno(rno);
            setRcontent(rcontent);
            setRnickname(rnickname);
            setModDate(modDate)
        }
    }, [reply]);

    const ChangeReply = (newReply) => {
        setRcontent(newReply);
    };

    return(
        <View style={styles.main}>
            <ReplyText/>
            <ReplyArea rnickname={rnickname} rcontent={rcontent} modDate={modDate} ChangeReply={ChangeReply}/>
            <SendButton rno={rno} bno={bno} userId={userId} rcontent={rcontent}/>
        </View>
    );
}

export default ReplyModify;