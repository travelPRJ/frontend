import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView, TextInput, Image, Modal } from "react-native";
import { useState } from 'react';

const styles = StyleSheet.create({
    text:{
        marginTop: 15,
        alignItems: 'center',
        height: 50
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold'
    }
});

const Title = ({btitle}) => {
    return(
        <View style={styles.text}>
            <Text style={styles.title}>{btitle}</Text>
        </View>
    );
}

export default Title;