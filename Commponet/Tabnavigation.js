import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screen/Home';
import Buy from '../Screen/Buy';
import Icon from "@expo/vector-icons/Entypo";
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
     tabBarStyle:{
      backgroundColor:"white"
     }
    }}
   
     
    >
      <Tab.Screen options={{
        tabBarIcon:()=>{
          return(
            <Icon name="bookmark" size={30} />
          )
        }
      }}
      name="Home" component={Home} />
      <Tab.Screen name="Buy" component={Buy} />
     
    </Tab.Navigator>
  );
}export default MyTabs