import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UniversalNavi from "./src/Navigation/UniversalNavi";
import { Provider } from 'react-redux';
import store from './src/Store/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, StatusBar } from 'react-native';
import LiveData from './src/functions/LiveData';
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  text: {
    color: "black",
    fontSize: 24,
  },
});
const App = () => {
  return (
    <SafeAreaProvider
      style={styles.container}
    >
      <Provider store={store}>
        <StatusBar
          barStyle="light-content" // Options: "dark-content" or "light-content"
          backgroundColor="#0f172a" // Matches your dark theme
          translucent={false} // Set to true if you want content behind the status bar
        />
        <NavigationContainer>
          <UniversalNavi />
        </NavigationContainer>
        <LiveData />
      </Provider>

    </SafeAreaProvider>


  );
}

export default App;
