import { View, Text } from "react-native";
import UniversalNavi from "./src/Navigation/UniversalNavi";
import { Provider } from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import store from "./src/Store/store";
export default function App() {
  return (
    <Provider store={store}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <NavigationContainer>
          <UniversalNavi />
        </NavigationContainer>

      </View>
    </Provider>

  );
}
