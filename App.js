import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as SpashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigation from "./navigation/BottomTabNavigation";
import { ProductDetail } from "./screens";

const Stack = createNativeStackNavigator();

export default function App() {
	const [fontsLoaded] = useFonts({
		regular: require("./assets/fonts/Poppins-Regular.ttf"),
		light: require("./assets/fonts/Poppins-Light.ttf"),
		bold: require("./assets/fonts/Poppins-Bold.ttf"),
		medium: require("./assets/fonts/Poppins-Medium.ttf"),
		extraBold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
		semiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SpashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Bottom Navigation"
					component={BottomTabNavigation}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="ProductDetail"
					component={ProductDetail}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
