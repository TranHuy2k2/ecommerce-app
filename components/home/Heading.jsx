import {
	StyleSheet,
	TouchableOpacity,
	View,
	Text,
} from "react-native";
import { COLORS, SIZES } from "@assets/constants";
import { Ionicons } from "@expo/vector-icons";

export default function Heading() {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>
					New Arrivals
				</Text>
				<TouchableOpacity>
					<Ionicons
						name="ios-grid"
						size={24}
						color={COLORS.primary}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		padding: 12,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	headerTitle: {
		fontFamily: "semiBold",
		fontSize: SIZES.xLarge - 2,
	},
});
