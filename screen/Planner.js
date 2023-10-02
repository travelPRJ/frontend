import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView } from "react-native";
import { useState } from 'react';


import PlannerText from "../components/Planner/PlannerText";
import WriteButton from "../components/Planner/WriteButton";
import TagButton from "../components/Planner/TagButton";
import ModalComponent from "../components/Planner/Modal";


const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
    },
    buttonContainer: {
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: 'space-between', // 좌우로 간격을 벌리도록 설정
        width: '89.5%', // 버튼들의 폭을 조정
        marginTop: 10, 
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
    selectedDataContainer: {
        flexDirection: 'row',
        marginHorizontal: 20,
        height: 40,
    },
    selectedDataItem: {
        margin: 5,
        alignItems: 'center', 
        justifyContent: 'center',
        padding: 5,
        height: 30,
        width: 70,
        borderRadius: 20,
        backgroundColor: 'skyblue',
    },
    selectedDataText: {
        fontWeight: 'bold',
    }
});

const Planner = () => {

    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedData, setSelectedData] = useState([]);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const toggleData = (item) => {
        if (selectedData.includes(item)) {
          setSelectedData(selectedData.filter((data) => data !== item));
        } else {
          setSelectedData([...selectedData, item]);
        }
      };

    return (
        <View style={styles.main}>
            <PlannerText/>
            <View style={styles.buttonContainer}>
                <TagButton onPress={toggleModal}/>
                <ModalComponent isVisible={isModalVisible} toggleModal={toggleModal} selectedData={selectedData} toggleData={toggleData}/>
                <WriteButton/>
            </View>
            <View style={styles.lineContainer}>
                <View style={styles.line}></View>
                <ScrollView horizontal={true}>
                <View style={styles.selectedDataContainer}>
                {selectedData.map((item, index) => (
                    <View style={styles.selectedDataItem}>
                    <TouchableOpacity
                        key={index}
                        onPress={() => toggleModal(item)}
                    >
                        
                            <Text style={styles.selectedDataText}>
                                {item}
                            </Text>
                        
                    </TouchableOpacity>
                    </View>
                ))}
                </View>
                </ScrollView>
                <View style={styles.line}></View>
            </View>
        </View>
    );
}

export default Planner;