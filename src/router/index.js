import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Image, View } from 'react-native';
import Dashboard from '../screens/Dashboard';
import Favourites from '../screens/Favourites';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();



const TabNavigator = () => (
    <Tabs.Navigator
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused
                        ? require('../assets/images/home_fill.png')
                        : require('../assets/images/home.png');
                } else if (route.name === 'Favourite') {
                    iconName = focused
                        ? require('../assets/images/star_fill.png')
                        : require('../assets/images/star.png');
                }

                return (
                    <Image
                        source={iconName}
                        style={{ height: size, width: size, tintColor: color }}
                    />
                );
            },
            tabBarActiveTintColor: '#fc7676',
            tabBarInactiveTintColor: '#acacac',
            tabBarLabelStyle: { fontFamily: 'Poppins-Medium' }
        })}
    >
        <Tabs.Screen name='Home' component={Dashboard} />
        <Tabs.Screen name='Favourite' component={Favourites} />
    </Tabs.Navigator>
)


const Navigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Dashboard' component={TabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default Navigation; 