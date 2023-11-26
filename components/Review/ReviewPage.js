import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView } from "react-native";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ip } from "../../src/config/ip";

const styles = StyleSheet.create({
    header: {
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 10,
        height: 30,
        width: 320,
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
    },
    container:{
        paddingTop: 3,
        paddingLeft: 5,
        paddingRight: 5,
        height: 360,
        width: 320,
    },
    box:{
        marginTop: 5,
        height: 30,
        width: 310,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
        paddingLeft: 10,
        paddingRight: 10,
    },
    left: {
        left:20
    },
    replyCount:{
        color: 'dodgerblue'
    },
    page: {
        flexDirection: 'row', 
        justifyContent: 'center'
    },
    button: {
        height: 40,
        width: 28,
        padding: 10,
        margin: 5,
        borderRadius:5,
        backgroundColor: 'lightgray'
      },
      activeButton: {
        backgroundColor: 'gray'
      },
    
});


const ReviewPage = ({ combine, userId }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [reviewData, setReviewData] = useState([]);

    const navigation = useNavigation();

    useEffect(() => {
        // 데이터를 가져오는 함수
        const fetchData = async () => {
            try {
                const response = await axios.get(`${ip}/board/list?btype=${combine}&page=${currentPage}`);
                setReviewData(response.data.dtoList);
                setTotalPages(response.data.totalPage);
            } catch (error) {
                console.error('데이터를 가져오는 중 오류 발생:', error);
            }
        };
    
        fetchData();   // 현재 페이지를 기준으로 데이터를 가져온다.
    }, [combine, currentPage]);
    
    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    return(
        <View>
            <View style={styles.header}>
                <Text>번호</Text>
                <Text>      글 제목</Text>
                <Text>작성자</Text>
            </View>
            <View style={styles.container}>
                {reviewData.map((item) => (
                    <View key={item.bno} style={styles.box}>
                        <Text>{item.bno}</Text>
                        <TouchableOpacity onPress = {() => navigation.navigate("ReviewRead", { bno: item.bno, userId:userId })}>
                            <Text style={styles.left}>
                                {item.btitle}{' '}
                                <Text style={styles.replyCount}>[{item.replyCount}]</Text>
                            </Text>
                        </TouchableOpacity>
                        <Text>{item.bnickname}</Text>
                    </View>
                ))}    
            </View>
            <View style={styles.page}>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                    <TouchableOpacity
                    key={page}
                    style={[styles.button, currentPage === page && styles.activeButton]}
                    onPress={() => handlePageClick(page)}
                    >
                        <Text>{page}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

export default ReviewPage;