import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView, TextInput, Image, Modal } from "react-native";
import { useState } from 'react';

const styles = StyleSheet.create({
    text:{
        marginTop: 15,
        marginLeft: 25,
        height: 50
    },
    text2: {
        marginTop: 2,
        flexDirection: 'row'
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold'
    }
});

const PlannerDay = ({pstart, pend}) => {
    return(
        <View style={styles.text}>
            <Text style={styles.title}>전체 여행기간</Text>
            <View style={styles.text2}>
                <Text>{pstart}</Text>
                <Text> ~ </Text>
                <Text>{pend}</Text>
            </View>
        </View>
    );
}

export default PlannerDay;