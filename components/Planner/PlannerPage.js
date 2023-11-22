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

// 기숙사 192.168.1.9
// 학교 172.16.104.127
// 학교 10.20.104.162

const PlannerPage = ({userId}) => {
    const [plannerData, setPlannerData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const navigation = useNavigation();

    useEffect(() => {
        // 데이터를 가져오는 함수
        const fetchData = async (page) => {
            try {
              const response = await axios.get(`${ip}/planner/list?page=${page}`);
              setPlannerData(response.data.dtoList);
              setCurrentPage(response.data.page);
              setTotalPages(response.data.totalPage);
            } catch (error) {
              console.error('데이터를 가져오는 중 오류 발생:', error);
            }
          };

        fetchData(currentPage); 
    }, [currentPage]); 

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    return (
        <View>
            <View style={styles.header}>
                <Text>번호</Text>
                <Text>         글 제목</Text>
                <Text>스크랩 수</Text>
            </View>
            <View style={styles.container}>
                {plannerData.map((item) => (
                    <View key={item.pno} style={styles.box}>
                        <Text>{item.pno}</Text>
                        <TouchableOpacity onPress = {() => navigation.navigate("PlannerRead", { pno: item.pno, userId:userId })}>
                            <Text>{item.ptitle}</Text>
                        </TouchableOpacity>
                        <Text>{item.pcount}</Text>
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

export default PlannerPage;