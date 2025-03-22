import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import MainAppTab from './MainAppTab';
const Stack = createStackNavigator();

const UniversalNavi = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isSignedIn ? (
                    <Stack.Screen
                        name="MainApp"
                        component={MainAppTab}
                        options={{ headerShown: false }}
                    />
                ) : (
                    <Stack.Screen
                        name="Auth"
                        component={AuthStack}
                        options={{ headerShown: false }}
                    />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default UniversalNavi
