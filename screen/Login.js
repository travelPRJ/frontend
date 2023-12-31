import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
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


const Login = () => {
    
    const navigation = useNavigation();

    return (
        <View style={styles.main}>
            <LoginText/>
            <KakaoButton/>
            <GoogleButton/>          
        </View>
    );
}

export default Login;