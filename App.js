import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screen/Login'
import Main from './screen/Main'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name = "Login" component={Login}/>
        <Stack.Screen name = "Main" component={Main}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

