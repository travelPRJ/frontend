import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView } from "react-native";
import { useState } from 'react';

import ReviewText from "../components/Review/ReviewText";
import WriteButton from "../components/Review/WriteButton";
import SearchButton from "../components/Review/SearchButton";
import ReviewPage from "../components/Review/ReviewPage";

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%', 
    },
    buttonsView: {
        padding: 5,
        height: 50,
        width: '98%',
        justifyContent: 'space-between',
    },
    lineContainer: {
        alignItems: 'center', 
        marginTop: 5,
    },
});

const Reviewer = ({route}) => {
    const { userId } = route.params; 

    const [combine, setCombine] = useState('');

    const updateCombine = (newCombine) => {
        setCombine(newCombine);
    };

    return(
        <ScrollView style={styles.main}>
            <ReviewText/>
            <View style={styles.buttonsView}>
                <SearchButton updateCombine={updateCombine}/>
            </View>
            <View style={styles.lineContainer}>
                <WriteButton userId={userId}/>
                <ReviewPage combine={combine} userId={userId}/>
            </View>
        </ScrollView>
    );
}

export default Reviewer;