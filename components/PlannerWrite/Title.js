import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView, TextInput, Image, Modal } from "react-native";


const styles = StyleSheet.create({
    Views: {
        marginTop: 10,
        marginLeft: 30,
    },
    text: {
        marginLeft: 2,
        fontWeight: 'bold',
        fontSize: 15
    },
    box: {
        paddingLeft: 10,
        marginTop: 5,
        borderRadius: 2,
        borderColor: 'black',
        borderWidth: 1,
        width: 240,
        height: 37
    }
});

const Title = () => {
    return(
        <View style={styles.Views}>
            <Text style={styles.text}>제목</Text>
            <TextInput style={styles.box} placeholder="제목을 입력해주세요"/>
        </View>
    );
}

export default Title;