import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GaitMetrics from '../pages/GaitMetrics';
const Tab = createBottomTabNavigator();

const MainAppTab = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'Home') iconName = 'home-outline';
                    else if (route.name === 'metrics') iconName = 'person-outline';
                    // else if (route.name === 'Settings') iconName = 'settings-outline';

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="metrics" component={GaitMetrics} />
            {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
        </Tab.Navigator>
    );
}
export default MainAppTab