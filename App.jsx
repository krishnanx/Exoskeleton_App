import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UniversalNavi from "./src/Navigation/UniversalNavi";
import { Provider } from 'react-redux';
import store from './src/Store/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <UniversalNavi />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>


  );
}

export default App;
