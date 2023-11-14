import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView, TextInput, Image, Modal } from "react-native";


const styles = StyleSheet.create({
    view1: {
        marginTop: 20,
        alignItems: 'center',
        marginBottom: 20,
    },
    text: {
        fontSize:25,
        marginBottom: 10
    },
    view2: {
        width: 300,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginTop: 10
    },
    title: {
        marginLeft: 3,
        fontSize: 20
    },
    infoView:{
        marginTop: 10,
        marginBottom: 5,
        flexDirection: 'row'
    },
    commonText: {
        paddingRight: 1,
        marginLeft: 1,
        fontSize: 15,
    }
});

const ReadLoc = ({ paths }) => {
    return(
        <View style={styles.view1}>
            <Text style={styles.text}>[여행 루트]</Text>
            {paths.map((path, index) =>(
            <View key={index} style={styles.view2}>
                <View>
                    <Text style={styles.title}>{path.placeName}</Text>
                </View>
                <View style={styles.infoView}>
                    <Text style={styles.commonText}>{path.transport}</Text>
                    <Text style={styles.commonText}>|</Text>
                    <Text style={styles.commonText}>{path.region}</Text>
                    <Text style={styles.commonText}>|</Text>
                    <Text style={styles.commonText}>{path.lstart} ~ {path.lend}</Text>
                </View>
            </View>
            ))}
        </View>
    );
}

export default ReadLoc;