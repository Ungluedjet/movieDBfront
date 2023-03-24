import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../container/Login';
import SignUp from '../container/SignUp';

const Stack = createNativeStackNavigator();

function LoginNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );
}

export default LoginNavigator;
