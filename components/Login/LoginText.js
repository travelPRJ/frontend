import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    loginView: {
        marginTop:40,
        marginBottom:100,
        paddingTop:50,
        paddingBottom:50,
        paddingLeft:100,
        paddingRight:100,
        backgroundColor: 'white'
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold'
    }
});

const LoginText = () => {
    return(
        <View style={styles.loginView}>
            <Text style={styles.text}>로그인</Text>
        </View>
    );
}

export default LoginText;


