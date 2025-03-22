import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../pages/SignUp"
import SignIn from "../pages/SignIn"
const Stack = createStackNavigator();

const AuthStack = () => {
    <Stack.Navigator>
        <Stack.Screen name="signup" component={SignUp} options={{ headerShown: false }} >

        </Stack.Screen>
        <Stack.Screen name="signin" component={SignIn} options={{ headerShown: false }} >

        </Stack.Screen>
    </Stack.Navigator>
}

export default AuthStack