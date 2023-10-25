import { View, Text } from "react-native";
import styles from "./welcome.style";
import { COLORS } from "@assets/constants";
import SearchBar from "@components/shared/search/SearchBar";
export default function Welcome() {
	return (
		<View>
			<View style={styles.container}>
				<Text
					style={styles.welcomeText(COLORS.black)}
				>
					Find the most
				</Text>
				<Text
					style={styles.welcomeText(
						COLORS.primary,
						0,
					)}
				>
					Luxurious Furniture
				</Text>
			</View>
			<SearchBar />
		</View>
	);
}
