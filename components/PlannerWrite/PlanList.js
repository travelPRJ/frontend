import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView, TextInput, Image, Modal } from "react-native";

const styles = StyleSheet.create({
    vv: {
        width: 300,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginTop: 10
    },
    view1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    place: {
        marginLeft: 3,
        fontSize: 20
    },
    button: {
        color: 'red',
        fontSize: 17
    },
    view2: {
        marginTop: 10,
        marginBottom: 5,
        flexDirection: 'row',
    },
    commonText: {
        paddingRight: 1,
        marginLeft: 1,
        fontSize: 15,
    }
});

const PlanList = ({ paths, onDeletePath }) => {

    const deletePath = (index) => {
        onDeletePath(index);
    };

    return(
    <View>
        {paths.map((path, index) => (
        <View key={index} style={styles.vv}>
            <View style={styles.view1}>
                <Text style={styles.place}>{path.placeName}</Text>
                <TouchableOpacity onPress={() => deletePath(index)}>
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