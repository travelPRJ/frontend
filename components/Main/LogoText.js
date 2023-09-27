import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    logoView: {
        alignItems: 'center',
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:100,
        paddingRight:100,
        backgroundColor: 'white'
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold'
    }
});

const LogoText = () => {
    return(
        <View style={styles.logoView}>
            <Text style={styles.text}>여행모아</Text>
        </View>
    );
}

export default LogoText;