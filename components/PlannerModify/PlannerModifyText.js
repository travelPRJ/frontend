import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    logoView: {
        alignItems: 'center',
        marginTop:10,
        marginBottom:10,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:10,
        paddingRight:10,
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold'
    }
});

const PlannerModifyText = () => {
    return(
        <View style={styles.logoView}>
            <Text style={styles.text}>플래너 수정</Text>
        </View>
    );
}

export default PlannerModifyText;