import { createStackNavigator } from "@react-navigation/stack";
import Main from "../../screen/Main";
import Planner from '../../screen/Planner';
import PlannerWrite from '../../screen/PlannerWrite';
import GoogleMap from '../../screen/GoogleMap';
import PlannerRead from "../../screen/PlannerRead";
import PlannerModify from "../../screen/PlannerModify";
import GoogleMapSec from "../../screen/GoogleMapSec";

const Stack = createStackNavigator();

export default function MainStack({ route }) {
  const { token } = route.params || {};
  const userId = token ? token.id : null;

  console.log("메인스택 확인용:", userId);  

  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={Main}/>
      <Stack.Screen name = "Planner" component={Planner}/>
      <Stack.Screen name = "PlannerWrite" component={PlannerWrite}/>
      <Stack.Screen name = "GoogleMap" component={GoogleMap}/>
      <Stack.Screen name = "PlannerRead" component={PlannerRead}/>
      <Stack.Screen name = "PlannerModify" component={PlannerModify}/>
      <Stack.Screen name = "GoogleMapSec" component={GoogleMapSec}/>
    </Stack.Navigator>
  );
}