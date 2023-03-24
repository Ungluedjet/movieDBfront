import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../container/Home';
import Profile from '../../profile/container/Profile';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;
