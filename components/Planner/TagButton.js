import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView } from "react-native";

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

const TagButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonlView}>
                <Text style={styles.button}>지역태그 +</Text>
            </View>
        </TouchableOpacity>
    );
}

export default TagButton;