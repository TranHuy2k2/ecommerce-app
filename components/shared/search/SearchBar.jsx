import {
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import styles from "./SearchBar.style";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function SearchBar() {
	const navigation = useNavigation();
	return (
		<View style={styles.searchContainer}>
			<TouchableOpacity>
				<Feather
					style={styles.searchIcon}
					name="camera"
					size={24}
					color="black"
				/>
			</TouchableOpacity>
			<View style={styles.searchWrapper}>
				<TextInput
					style={styles.searchInput}
					placeholder="What are you looking for..."
					value=""
					onPressIn={(e) => {
						e.preventDefault();
						navigation.navigate("Search");
					}}
				></TextInput>
			</View>
			<View>
				<TouchableOpacity style={styles.searchBtn}>
					<Ionicons
						name="search-outline"
						size={24}
						color="white"
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
}
