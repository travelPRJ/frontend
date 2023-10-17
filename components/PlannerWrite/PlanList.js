import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView, TextInput, Image, Modal } from "react-native";

const styles = StyleSheet.create({
    vv: {
        marginTop: 10,
    },
    view1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '97%'
    },
    place: {
        marginLeft: 3,
        fontSize: 20
    },
    button: {
        fontSize: 17
    },
    view2: {
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '88%'
    },
    commonText: {
        marginLeft: 3,
        fontSize: 15,
    }
});

const PlanList = ({ paths }) => {
    return(
    <View>
        {paths.map((path, index) => (
        <View key={index} style={styles.vv}>
            <View style={styles.view1}>
                <Text style={styles.place}>{path.name}</Text>
                <TouchableOpacity>
                <Text style={styles.button}>X</Text>
                </TouchableOpacity>
            </View>
          <View style={styles.view2}>
            <Text style={styles.commonText}>{path.transport}</Text>
            <Text style={styles.commonText}>|</Text>
            <Text style={styles.commonText}>{path.location}</Text>
            <Text style={styles.commonText}>|</Text>
            <Text style={styles.commonText}>{path.startDate} ~ {path.endDate}</Text>
          </View>
        </View>
      ))}
    </View>
    );
}

export default PlanList;