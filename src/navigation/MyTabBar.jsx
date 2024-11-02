import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Category from '../screens/Category';
import Cart from '../screens/Cart';
import Home from '../screens/Home';

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
            iconName = focused ? 'store' : 'store-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          }

          return (
            <MaterialCommunityIcons
              name={iconName}
              color={color}
              size={focused ? 24 : 20}
            />
          );
        },
        tabBarActiveTintColor: '#DB312D',
        tabBarInactiveTintColor: '#333',
        tabBarStyle: {
          height: 60,
          elevation: 3,
          borderTopWidth: 0,
          borderTopColor: 'grey',
          paddingBottom: 10,
          borderRadius: 30,
          marginBottom: 15,
          marginHorizontal: 20,
          position: 'absolute',
        },
        headerShown: false,
        tabBarShowLabel: true,
        tabBarHideOnKeyboard: true,
        tabBarLabel: ({color, size}) => {
          return (
            <Text
              style={{
                color: color,
                fontSize: size,
              }}>
              {route.name}
            </Text>
          );
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Category" component={Category} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
}

export default MyTabBar;
