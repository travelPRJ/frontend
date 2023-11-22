import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginStack from "./login/loginStack";
import MainStack from "./main/mainStack";
import JoinPage from "../screen/joinPage";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";

const Stack = createStackNavigator();

const Root = () => {
  //로그인 확인 변수
  const [isLogin, setIsLogin] = useState(false);
  //회원정보 확인 변수
  const [userInfo, setUserInfo] = useState(false);

  // const [token, setToken] = useState(6);

  /**
   * AsyncStorage에서 토큰 정보를 가져온다.
   */

  const getLogin = async () => {
    const token = jwtDecode(await AsyncStorage.getItem("accessToken"));
    if (token !== null) {
      console.log("토큰: ", token);
      console.log("액세스 토큰이 있네");
      setIsLogin(true);
      if (token && token.nickname !== undefined) {
        console.log("유저 정보: ", token.nickname);
        setUserInfo(true);
      }
    }
  };

  // const getLogin = async () => {
  //   const storedToken = await AsyncStorage.getItem("accessToken");
  //   const decodedToken = storedToken ? jwtDecode(storedToken) : null;
  //   if (decodedToken !== null) {
  //     console.log("토큰: ", decodedToken);
  //     console.log("액세스 토큰이 있네");
  //     setIsLogin(true);
  //     // setToken(decodedToken);
  //     if (decodedToken && decodedToken.nickname !== undefined) {
  //       console.log("유저 정보: ", decodedToken.nickname);
  //       setUserInfo(true);
  //     }
  //   }
  // };

  // 최초 로딩 시 한 번만 실행
  useEffect(() => {
    getLogin();
  }, []); 

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogin ? (
          userInfo ? (
            <Stack.Screen
              name="MainStack"
              component={MainStack}
              options={{ headerShown: false }}
            />
          ) : (
            <Stack.Screen
              name="JoinPage"
              component={JoinPage}
              options={{ headerShown: false }}
            />
          )
        ) : (
          <Stack.Screen
            name="LoginStack"
            component={LoginStack}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
