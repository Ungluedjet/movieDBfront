import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Details from '../container/Details';
import DrawerNavigator from './homeDrawer';

const Stack = createNativeStackNavigator();

function HomeNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={DrawerNavigator}
                options={{headerShown: false}}
            />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    );
}

export default HomeNavigator;
