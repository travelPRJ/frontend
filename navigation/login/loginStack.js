import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../screen/Login";
import KaKaoLogin from "../../screen/kakaoLogin";

const Stack = createStackNavigator();

export default function LoginStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="KaKaoLogin"
        component={KaKaoLogin}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}