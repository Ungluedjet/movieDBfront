import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeNavigator from '../features/home/navigation/homeNavigator';

const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="home"
                component={HomeNavigator}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}

export default AppNavigator;
