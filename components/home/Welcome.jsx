import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
} from "react-native";
import styles from "./welcome.style";
import { COLORS } from "../../assets/constants";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function Welcome() {
	const navigation = useNavigation();
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
			<View style={styles.searchContainer}>
				<TouchableOpacity>
					<Feather
						style={styles.searchIcon}
						name="search"
						size={24}
						color="black"
					/>
				</TouchableOpacity>
				<View style={styles.searchWrapper}>
					<TextInput
						style={styles.searchInput}
						placeholder="What are you looking for..."
						value=""
						onPressIn={() => {
							navigation.navigate("Search");
						}}
					></TextInput>
				</View>
				<View>
					<TouchableOpacity
						style={styles.searchBtn}
					>
						<Ionicons
							name="camera-outline"
							size={24}
							color="white"
						/>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}
