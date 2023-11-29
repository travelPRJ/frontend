import { createStackNavigator } from "@react-navigation/stack";
import Main from "../../screen/Main";
import Planner from '../../screen/Planner';
import PlannerWrite from '../../screen/PlannerWrite';
import GoogleMap from '../../screen/GoogleMap';
import PlannerRead from "../../screen/PlannerRead";
import PlannerModify from "../../screen/PlannerModify";
import GoogleMapSec from "../../screen/GoogleMapSec";
import Reviewer from "../../screen/Reviewer";
import ReviewRead from "../../screen/ReviewRead";
import ReviewWrite from "../../screen/ReviewWrite";
import ReviewModify from "../../screen/ReviewModify";
import ReplyModify from "../../screen/ReplyModify";

const Stack = createStackNavigator();

export default function MainStack() {

  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={Main}/>
      <Stack.Screen name = "Planner" component={Planner}/>
      <Stack.Screen name = "PlannerWrite" component={PlannerWrite}/>
      <Stack.Screen name = "GoogleMap" component={GoogleMap}/>
      <Stack.Screen name = "PlannerRead" component={PlannerRead}/>
      <Stack.Screen name = "PlannerModify" component={PlannerModify}/>
      <Stack.Screen name = "GoogleMapSec" component={GoogleMapSec}/>
      <Stack.Screen name = "Reviewer" component={Reviewer}/>
      <Stack.Screen name = "ReviewWrite" component={ReviewWrite}/>
      <Stack.Screen name = "ReviewRead" component={ReviewRead}/>
      <Stack.Screen name = "ReviewModify" component={ReviewModify}/>
      <Stack.Screen name = "ReplyModify" component={ReplyModify}/>
    </Stack.Navigator>
  );
}