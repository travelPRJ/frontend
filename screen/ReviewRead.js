import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView, TextInput, Image, Modal } from "react-native";
import { useState, useEffect } from 'react';
import Title from "../components/ReviewRead/Title";
import Profile from "../components/ReviewRead/Profile";
import TextView from "../components/ReviewRead/TextView";
import axios from "axios";
import { ip } from "../src/config/ip";
import Butt from "../components/ReviewRead/Butt";
import ReplyField from "../components/ReviewRead/ReplyField";
import Reply from "../components/ReviewRead/Reply";


const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
    },
    row: {
        alignItems: 'center',
        marginTop: 20,
        margin: 10,
        flexDirection: 'row',
        height: 40,
    },
    lineContainer: {
        alignItems: 'center', 
        marginTop: 5,
    },
    line: {
        width: '90%',
        borderWidth: 0.2, 
        borderColor: 'gray', 
        borderStyle: 'solid'
    },
});

const ReviewRead = ({ route }) => {
    const { bno } = route.params;
    const { userId } = route.params;
    const [boardInfo, setBoardInfo] = useState(null);
   
    useEffect(() => {
        const fetchBoardInfo = async () => {
          try {
            const response = await axios.get(
              `${ip}/board/read?bno=${bno}`
            );
            setBoardInfo(response.data);
          } catch (error) {
            console.error("리뷰 정보를 가져오는 중 오류 발생:", error);
          }
        };

        fetchBoardInfo();
        
      }, [bno]);

    return(
        <ScrollView style={styles.main}>
            {boardInfo && <Title btitle={boardInfo.btitle} />}
            <View style={styles.row}>
                {boardInfo && <Profile bname={boardInfo.bnickname} modDate={boardInfo.modDate} />}
                {boardInfo && <Butt userId={userId} bno={bno} boardInfo={boardInfo}/>}
            </View>
            <View style={styles.lineContainer}>
                <View style={styles.line}></View>
            </View>
            {boardInfo && <TextView bcontent={boardInfo.bcontent}/>}
            <View style={styles.lineContainer}>
                <View style={styles.line}></View>
            </View>
            <ReplyField bno={bno} userId={userId}/>
            <View style={styles.lineContainer}>
                <View style={styles.line}></View>
            </View>
            <Reply bno={bno} userId={userId}/>
        </ScrollView>
    );
}

export default ReviewRead;