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

const PlannerText = () => {
    return(
        <View style={styles.logoView}>
            <Text style={styles.text}>플래너</Text>
        </View>
    );
}

export default PlannerText;