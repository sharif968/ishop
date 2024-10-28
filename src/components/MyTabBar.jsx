import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Category from '../screens/Category';
import CheckOut from '../screens/CheckOut';

const Tab = createBottomTabNavigator();

function MyTabBar() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Category') {
            iconName = focused ? 'view-list' : 'view-list-outline';
          } else if (route.name === 'ProductDetails') {
            iconName = focused ? 'info' : 'info-outline';
          } else if (route.name === 'CheckOut') {
            iconName = focused ? 'cart' : 'cart-outline';
          }

          return (
            <MaterialCommunityIcons name={iconName} color={color} size={size} />
          );
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          borderTopWidth: 2,
          elevation: 30,
          shadowOpacity: 0.5,
          height: 65,
          shadowColor: 'black',
          backgroundColor: 'purple',
          shadowRadius: 10,
          shadowOffset: {
            width: 0,
            height: 20,
          },
          paddingBottom: 10,
          borderRadius: 30,
          marginBottom: 15,
          marginHorizontal: 20,
          position: 'absolute',
        },
        headerShown: false,
        tabBarHideOnKeyboard: true,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Category" component={Category} />

      <Tab.Screen name="CheckOut" component={CheckOut} />
    </Tab.Navigator>
  );
}

export default MyTabBar;
