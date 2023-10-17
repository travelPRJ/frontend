import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView } from "react-native";
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
        height: '20%',
        width: '100%',
    },
    text: {
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 25,
        marginRight: 25,
        height: 220,
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
    const { selectedLocation } = route.params || {};

    const addPath = (newPath) => {
        setPaths([...paths, newPath]);
      };

    return (
        <ScrollView style = {styles.main}>
            <PlannerText/>
            <Title/>
            <CalendarView/>
            <View style={styles.lineContainer}>
                <View style={styles.line}></View>
            </View>
            <Write selected={selectedLocation} addPath={addPath}/>
            
                <View style={styles.lineContainer}>
                <View style={styles.line}></View>
                <ScrollView style={styles.main2}>
                    <View style={styles.text}>
                        <PlanList paths={paths} />
                    </View>
                </ScrollView>
                <View style={styles.line}></View>
            </View>
            
            <MapMakerView/>
            <Butt/>
        </ScrollView>
    )
}

export default PlannerWrite;