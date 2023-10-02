// 플래너 버튼
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";

import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    buttonlView: {
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 10,
        padding: 1,
        height: 160,
        width: 140,
        backgroundColor: 'skyblue'
    },
    button:{
        fontWeight: 'bold',
        fontSize: 30
    }
});

const MappingButton = (props) =>{

    const navigation = useNavigation();

    return(
        <TouchableOpacity onPress = {() => navigation.navigate("Planner")}>
            <View style={styles.buttonlView}>
                <Text style={styles.button}>플래너</Text>
            </View>
        </TouchableOpacity>
    );
}

export default MappingButton;