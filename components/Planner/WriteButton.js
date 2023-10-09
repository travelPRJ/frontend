import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView } from "react-native";

import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    buttonlView: {
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 20,
        padding: 5,
        height: 35,
        width: 95,
        backgroundColor: 'skyblue'
    },
    button:{
        fontWeight: 'bold',
        fontSize: 15
    }
});

const WriteButton = (props) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress = {() => navigation.navigate("PlannerWrite")}>
            <View style={styles.buttonlView}>
                <Text style={styles.button}>플래너 작성</Text>
            </View>
        </TouchableOpacity>
    );
}

export default WriteButton;