import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginNavigator from '../features/login/navigation/loginNavigator';
import AppNavigator from './appNavigator';

const Stack = createNativeStackNavigator();

function Navigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="login"
                component={LoginNavigator}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="app"
                component={AppNavigator}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}

export default Navigator;
