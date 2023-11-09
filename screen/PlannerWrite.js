import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView, FlatList } from "react-native";
import { useState } from "react";
import PlannerText from "../components/Planner/PlannerText";
import CalendarView from "../components/PlannerWrite/Calendar";
import Write from "../components/PlannerWrite/Write";
import MapMakerView from "../components/PlannerWrite/MapMakerView";
import Butt from "../components/PlannerWrite/Buttons";
import Title from "../components/PlannerWrite/Title";
import PlanList from "../components/PlannerWrite/PlanList";

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
});

const PlannerWrite = ({ route }) => {

    const [paths, setPaths] = useState([]);
    const [ptitle, setTitle] = useState('');
    const [selectedDates, setSelectedDates] = useState({ pstart: '', pend: '' });

    
    // route.params가 null 또는 undefined인 경우 빈 객체({})를 사용하도록 하기 위한 방어적인 코드
    // React Navigation을 통해 전달된 경로 파라미터에서 selectedLocation 값을 추출하는 역할
    const { selectedLocation } = route.params || {};

    // 경로 추가를 하면 데이터가 쌓인다
    const addPath = (newPath) => {
        setPaths((prevPaths) => {
            const updatedPaths = [...prevPaths, newPath];
            console.log("데이터들 : " + JSON.stringify(updatedPaths, null, 2));
            return updatedPaths;
        });
    };

    const deletePath = (index) => {
        // paths 배열에서 해당 인덱스의 경로를 삭제하고 업데이트
        const updatedPaths = [...paths];
        updatedPaths.splice(index, 1);
        setPaths(updatedPaths);
    };

    const handleTitleChange = (newTitle) => {
        setTitle(newTitle);
    };

    const handleDateChange = ({ pstart, pend }) => {
        setSelectedDates({ pstart, pend });
    };

    return (
        <ScrollView style = {styles.main} nestedScrollEnabled={true}>
            <PlannerText/>
            <Title onTitleChange={handleTitleChange}/>
            <CalendarView onDateChange={handleDateChange}/>
            <View style={styles.lineContainer}>
                <View style={styles.line}></View>
            </View>
            <Write selected={selectedLocation} addPath={addPath}/>
            
                <View style={styles.lineContainer}>
                    <View style={styles.line}></View>
                
                    <View style={styles.main2}>      
                        <PlanList paths={paths} onDeletePath={(index) => deletePath(index)} />
                    </View>
               
                    <View style={styles.line}></View>
                </View>
            {/* <MapMakerView paths={paths}/> */}
            <Butt paths={paths} ptitle={ptitle} selectedDates={selectedDates}/>
        </ScrollView>
    )
}

export default PlannerWrite;