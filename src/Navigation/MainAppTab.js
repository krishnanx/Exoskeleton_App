import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Settings from '../pages/Settings';
import GaitMetrics from '../pages/GaitMetrics';
const Tab = createBottomTabNavigator();

const MainAppTab = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'Home') iconName = 'home-outline';
                    else if (route.name === 'metrics') iconName = 'chart-line';
                    else if (route.name === 'Settings') iconName = 'cog-outline';

                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}
            initialRouteName="Home"


        >
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="metrics" component={GaitMetrics} options={{ headerShown: false }} />
            <Tab.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}
export default MainAppTab