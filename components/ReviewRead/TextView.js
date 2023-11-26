import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView, TextInput, Image, Modal } from "react-native";
import { useState } from 'react';

const styles = StyleSheet.create({
    main: {
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
    },
    area:{
        color: 'black',
        padding: 10,
    }
});

const TextView = ({bcontent}) => {
    return(
        <View style={styles.main}>
            <TextInput
            style={styles.area}
            multiline
            numberOfLines={15}  
            value={bcontent}
            editable={false} 
            selectTextOnFocus={false}
            />
        </View>
    );
}

export default TextView;