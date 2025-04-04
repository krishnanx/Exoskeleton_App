import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AuthStack from './AuthStack';
import MainAppTab from './MainAppTab';
import { useSelector } from 'react-redux';
const Stack = createStackNavigator();
const UniversalNavi = () => {

    const { user } = useSelector((state) => state.auth);
    return (

        <Stack.Navigator>
            {true ? (
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

    );
}
export default UniversalNavi
