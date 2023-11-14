import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView, TextInput, Image, Modal } from "react-native";
import { useState, useEffect } from 'react';
import axios from "axios";

// 기숙사 192.168.1.9
// 학교 172.16.104.127
// 학교 10.20.104.162

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
    },
    
});

const PlannerModify = ({ route }) => {
    // const { pno } = route.params;
    return(
        <View style={styles.main}>

        </View>
    );
}

export default PlannerModify;