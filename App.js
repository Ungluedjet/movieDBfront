import 'react-native-gesture-handler';
import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/navigation/mainNavigator';

import store from './store';

if (__DEV__) {
    import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

const App = () => {
    return (
        <Provider store={store}>
            <NativeBaseProvider>
                <NavigationContainer>
                    <Navigator />
                </NavigationContainer>
            </NativeBaseProvider>
        </Provider>
    );
};

export default App;
