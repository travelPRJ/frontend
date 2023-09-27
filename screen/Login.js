import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";

import LoginText from "../components/Login/LoginText";
import GoogleButton from "../components/Login/GoogleButton";
import KakaoButton from "../components/Login/KakaoButton";

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center', 
    },
    buttonView: {
        borderRadius:20,
        marginTop:20,
        backgroundColor: 'skyblue'
    },
    buttonText: {
        fontSize:20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft:60,
        paddingRight:60
    }
});


const Login = (props) => {
    return (
        <View style={styles.main}>
            <LoginText/>
            <View style={styles.buttonView}>
                <TouchableOpacity onPress = {() => {props.navigation.navigate("Main")}}>
                    <Text style={styles.buttonText}>임시 메인 페이지 이동</Text>
                </TouchableOpacity> 
            </View>
            <KakaoButton/>
            <GoogleButton/>          
        </View>
    );
}

export default Login;