import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView } from "react-native";

import LogoText from "../components/Main/LogoText";
import CarouselView from "../components/Main/CarouselView";
import TravelButton from "../components/Main/TravelButton";
import MappingButton from "../components/Main/MappingButton";
import AiButton from "../components/Main/AiButton";
import { useState } from "react";

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
    },
    buttonContainer: {
        marginLeft: 37,
        flexDirection: 'row',
        justifyContent: 'space-between', // 좌우로 간격을 벌리도록 설정
        width: '80%', // 버튼들의 폭을 조정
        marginTop: 20, // 버튼과 캐러셀 사이의 간격 조정
    },
    aibuttonContainer:{
        marginTop: 10,
        marginLeft: 36,
    }
});

const Main = () => {

    return (
        <View style={styles.main}>
            <LogoText/>
            <View style={{ alignItems: 'center' }}>
                <CarouselView/>
            </View>
            <View style={styles.buttonContainer}>
                <TravelButton/>
                <MappingButton/>
            </View>
            <View style={styles.aibuttonContainer}>
                <AiButton/>
            </View>
        </View>
    );
}

export default Main;
