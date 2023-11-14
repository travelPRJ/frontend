import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { KaKao_API } from "../src/config";
import jwtDecode from "jwt-decode";

// 192.168.1.9 기숙사

const REST_API_KEY = "ffedcf053632369addfc82233b29e0d2";
const REDIRECT_URI = "http://192.168.1.9:8081/oauth2/login/kakao";
const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

const config = {
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
};

const KaKaoLogin = () => {
  const navigation = useNavigation();

  function KakaoLoginWebView(data) {
    const exp = "code=";
    var condition = data.indexOf(exp);
    if (condition != -1) {
      var authorize_code = data.substring(condition + exp.length);
      console.log("authorize_code : ", authorize_code);
      request(authorize_code);
    }
  }

  const request = async (authorize_code) => {
    try {
      const kakaoLoginResult = await axios({
        method: "post",
        url: "https://kauth.kakao.com/oauth/token",
        params: {
          grant_type: "authorization_code",
          client_id: REST_API_KEY,
          redirect_uri: REDIRECT_URI,
          code: authorize_code,
        },
      });

      const id_token = kakaoLoginResult.data.id_token;
      console.log("id_token: ", jwtDecode(id_token));

      const jwtRequest = await axios.post(
        "http://192.168.1.9:5000/oauth/jwt/kakao",
        JSON.stringify(jwtDecode(id_token)),
        config
      );

      storeData(jwtRequest);
    } catch (error) {
      console.log("Error: ", error);
    }

    // if (jwtToken.status === 200) {
    //   console.log(2, jwtToken.data);
    //   storeData(jwtToken.data);
    // }

    //navigation.navigate("Signup", { screen: "Signup" });
  };

  const storeData = async (accessToken) => {
    try {
      const token = accessToken.data;
      console.log("토오큰: ", token);
      await AsyncStorage.setItem("accessToken", token);
      navigation.navigate("JoinPage");
    } catch (error) {
      console.log("여기");
    }
  };

  return (
    <View style={Styles.container}>
      <WebView
        style={{ flex: 1 }}
        originWhitelist={["*"]}
        scalesPageToFit={false}
        source={{
          uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
        }}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        javaScriptEnabled
        onMessage={(event) => {
          KakaoLoginWebView(event.nativeEvent["url"]);
        }}
      />
    </View>
  );
};

export default KaKaoLogin;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    backgroundColor: "#fff",
  },
});