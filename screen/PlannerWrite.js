import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView } from "react-native";

import PlannerText from "../components/Planner/PlannerText";
import CalendarView from "../components/PlannerWrite/Calendar";
import Write from "../components/PlannerWrite/Write";

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
    },
    lineContainer: {
        alignItems: 'center', 
        marginTop: 5,
    },
    line: {
        width: '85%',
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
        </ScrollView>
    )
}

export default PlannerWrite;