import {
	SafeAreaView,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import styles from "./home.style";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { Welcome } from "../components";
export default function Home() {
	return (
		<SafeAreaView>
			<View style={styles.appBarWrapper}>
				<View style={styles.appBar}>
					<Ionicons
						name="location-outline"
						size={24}
						color="black"
					/>
					<Text style={styles.location}>
						Can Tho, Viet Nam
					</Text>
					<View
						style={{ alignItems: "flex-end" }}
					>
						<View style={styles.cartCount}>
							<Text
								style={styles.cartCountText}
							>
								8
							</Text>
						</View>
						<TouchableOpacity>
							<Fontisto
								name="shopping-bag"
								size={24}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<ScrollView>
				<Welcome />
			</ScrollView>
		</SafeAreaView>
	);
}
