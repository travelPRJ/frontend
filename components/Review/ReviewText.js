import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    logoView: {
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:100,
        paddingRight:100,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold'
    }
});

const ReviewText = () => {
    return(
        <View style={styles.logoView}>
            <Text style={styles.text}>여행 리뷰</Text>
        </View>
    );
}

export default  ReviewText;