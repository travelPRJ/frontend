import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView, Image } from "react-native";

import searchImg from "../../image/search2.png"

const styles = StyleSheet.create({
    imageStyle: {
        borderRadius:10,
        height: 35,
        width: 35
    },
});

const TagButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
                <Image source={searchImg} style={styles.imageStyle}/>
        </TouchableOpacity>
    );
}

export default TagButton;