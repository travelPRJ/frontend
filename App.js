import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screen/Login';
import Main from './screen/Main';
import Planner from './screen/Planner';
import PlannerWrite from './screen/PlannerWrite';
import GoogleMap from './screen/GoogleMap';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name = "Login" component={Login}/>
        <Stack.Screen name = "Main" component={Main}/>
        <Stack.Screen name = "Planner" component={Planner}/>
        <Stack.Screen name = "PlannerWrite" component={PlannerWrite}/>
        <Stack.Screen name = "GoogleMap" component={GoogleMap}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

