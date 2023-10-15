import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView } from "react-native";
import PlannerText from "../components/Planner/PlannerText";
import CalendarView from "../components/PlannerWrite/Calendar";
import Write from "../components/PlannerWrite/Write";
import MapMakerView from "../components/PlannerWrite/MapMakerView";
import Butt from "../components/PlannerWrite/Buttons";

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
    },
    text: {
        backgroundColor: 'skyblue',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 25,
        marginRight: 25,
        height: 220
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

const PlannerWrite = () => {
    return (
        <ScrollView style = {styles.main}>
            <PlannerText/>
            <CalendarView/>
            <View style={styles.lineContainer}>
                <View style={styles.line}></View>
            </View>
            <Write/>
            <ScrollView>
                <View style={styles.lineContainer}>
                    <View style={styles.line}></View>
                </View>
                <View style={styles.text}>

                </View>
                <View style={styles.lineContainer}>
                    <View style={styles.line}></View>
                </View>
            </ScrollView>
            <MapMakerView/>
            <Butt/>
        </ScrollView>
    )
}

export default PlannerWrite;