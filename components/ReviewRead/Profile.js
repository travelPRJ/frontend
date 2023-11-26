import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView, TextInput, Image, Modal } from "react-native";
import { useState } from 'react';

const styles = StyleSheet.create({
    profile: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    row: {
        left: 10,
        
        flexDirection: 'row'
    }
});

const Profile = ({bname, modDate}) => {
    return(
        <View style={styles.row}>
            <Text style={styles.profile}>{bname}</Text>
            <Text style={styles.profile}> | </Text>
            <Text style={styles.profile}>{modDate}</Text>
        </View>
    );
}

export default Profile;