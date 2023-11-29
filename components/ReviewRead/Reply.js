import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView, TextInput, Image, Modal } from "react-native";
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ip } from "../../src/config/ip";
import axios from "axios";

const styles = StyleSheet.create({
    main: {
        alignItems: 'center',
        height: 'auto',
        width: 360,
        padding: 10,
    },
    box: {
        padding: 10,
        height: 'auto',
        width: 280,
        marginBottom: 10,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1
    },
    profile: {
        marginBottom: 10,
        flexDirection: 'row'
    },
    text: {
        fontSize: 15
    },
    text2: {
        marginLeft: 65,
        fontSize: 15,
        color: 'skyblue'
    },
    text3: {
        fontSize: 15,
        color: 'red'
    }
});

const Reply = ({ bno, userId }) => {
    const navigation = useNavigation();
    const [replies, setReplies] = useState([]);

    const config = {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
    };

    useEffect(() => {
        const fetchReplies = async () => {
        try {
            const response = await axios.get(`${ip}/reply/board/${bno}`);
            setReplies(response.data);
        } catch (error) {
            console.error('Error fetching replies:', error);
        }
        };

        fetchReplies();
    }, [bno])

     const handleDelete = async (rno) => {
        try {
        await axios.post(`${ip}/reply/remove`, { rno }, config);
        const updatedReplies = replies.filter((reply) => reply.rno !== rno);
        setReplies(updatedReplies);
        } catch (error) {
        console.error('댓글 삭제 중 에러 발생:', error);
        }
    };

    return(
        <View style={styles.main}>
            {replies.map((reply) => (
                <View key={reply.rno} style={styles.box}>
                    <View style={styles.profile}>
                        <Text style={styles.text}>{reply.rnickname}</Text>
                        <Text style={styles.text}> | </Text>
                        <Text style={styles.text}>{reply.modDate}</Text>
                        {userId === reply.runo && (
                            <>
                            <TouchableOpacity onPress = {() => {navigation.navigate("ReplyModify", {reply, bno, userId})}}>
                                <Text style={styles.text2}>수정</Text>
                            </TouchableOpacity>
                                <Text style={styles.text}> | </Text>
                            <TouchableOpacity onPress={() => handleDelete(reply.rno)}>
                                <Text style={styles.text3}>삭제</Text>
                            </TouchableOpacity>
                            </>
                        )}
                    </View>
                    <Text style={styles.text}>{reply.rcontent}</Text>
                </View>
            ))}
        </View>
    );
}

export default Reply;