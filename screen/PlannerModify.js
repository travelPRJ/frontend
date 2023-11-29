import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView, TextInput, Image, Modal } from "react-native";
import { useState, useEffect } from 'react';
import axios from "axios";
import PlannerModifyText from "../components/PlannerModify/PlannerModifyText";
import Title from "../components/PlannerModify/Title";
import CalendarView from "../components/PlannerModify/Calendar";
import Write from "../components/PlannerModify/Write";
import PlanList from "../components/PlannerModify/PlanList";
import MapMakerView from "../components/PlannerModify/MapMakerView";
import Buttons from "../components/PlannerModify/Buttons";

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
    },
    main2: {
        marginTop: 10,
        marginBottom: 10,
        height: 'auto',
    },
    lineContainer: {
        alignItems: 'center',
        marginTop: 5,
    },
    line: {
        width: '87%',
        borderWidth: 0.2, 
        borderColor: 'gray', 
        borderStyle: 'solid'
    },
    mapview: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 24.5,
        height:310,
        width:310
    },
});

const PlannerModify = ({ route }) => {
    const { plannerInfo, plannerLocations } = route.params;
    const { pno } = route.params;
    const [paths, setPaths] = useState([]);
    const [ptitle, setTitle] = useState('');
    const [selectedDates, setSelectedDates] = useState({ pstart: '', pend: '' });
    const { selectedLocation } = route.params || {};   //구글맵에서 장소 검색 후 데이터 저장하면 여기에 쌓입니당

    useEffect(() => {
        // 페이지가 처음 렌더링될 때 실행되는 부분
        if (plannerInfo) {
            // plannerInfo에서 필요한 데이터 추출
            const { ptitle, pstart, pend } = plannerInfo;

            // state 변수에 데이터 저장
            setTitle(ptitle);
            setSelectedDates({ pstart, pend });
        }

        if (plannerLocations) {
            // plannerLocations에서 필요한 데이터 추출
            const locations = plannerLocations.map(location => ({
                ppno: location.ppno,
                lat: location.lat,
                lng: location.lng,
                placeName: location.placeName,
                transport: location.transport,
                location: location.region,
                lstart: location.lstart,
                lend: location.lend,
            }));

            // state 변수에 데이터 저장
            setPaths(locations);
        }
    }, [plannerInfo, plannerLocations]);

    


    // 제목 함수
    const handleTitleChange = (newTitle) => {
        setTitle(newTitle);
    };

    // 날짜 함수
    const handleDateChange = ({ pstart, pend }) => {
        setSelectedDates({ pstart, pend });
    };

    // 경로 추가를 하면 데이터가 쌓인다
    const addPath = (newPath) => {
        setPaths((prevPaths) => {
            const updatedPaths = [...prevPaths, newPath];
            return updatedPaths;
        });
    };

    const deletePath = (index) => {
        // paths 배열에서 해당 인덱스의 경로를 삭제하고 업데이트
        const updatedPaths = [...paths];
        updatedPaths.splice(index, 1);
        setPaths(updatedPaths);
    };

    return(
        <ScrollView style={styles.main}>
            <PlannerModifyText/>
            <Title onTitleChange={handleTitleChange} title={ptitle}/>
            <CalendarView onDateChange={handleDateChange} day={selectedDates}/>
            <View style={styles.lineContainer}>
                <View style={styles.line}></View>
            </View>
            <Write selected={selectedLocation} addPath={addPath} pno={pno}/>
            <View style={styles.lineContainer}>
                <View style={styles.line}></View>
                    <View style={styles.main2}>      
                        <PlanList paths={paths} onDeletePath={(index) => deletePath(index)} />
                    </View>
                <View style={styles.line}></View>
            </View>
            <View style = {styles.mapview}>
                <MapMakerView paths={paths}/>
            </View>
            <Buttons paths={paths} ptitle={ptitle} selectedDates={selectedDates} pno={pno} />
        </ScrollView>
    );
}

export default PlannerModify;