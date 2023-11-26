import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView } from "react-native";

import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    buttonlView: {
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 15,
        padding: 5,
        height: 35,
        width: 80,
        backgroundColor: 'skyblue'
        
    },
    button:{
        fontWeight: 'bold',
        fontSize: 15
    }
});

const WriteButton = ({ userId }) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress = {() => navigation.navigate("ReviewWrite", { userId })}>
            <View style={styles.buttonlView}>
                <Text style={styles.button}>리뷰 작성</Text>
            </View>
        </TouchableOpacity>
    );
}

export default WriteButton;