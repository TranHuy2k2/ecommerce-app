import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import styles from "./ProductCardView.style";
import { COLORS } from "@assets/constants";
import fn1 from "@assets/images/fn1.jpg";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function ProductCardView({ item }) {
	const navigation = useNavigation();
	return (
		<TouchableOpacity
			onPress={() => {
				navigation.navigate("ProductDetail", {});
			}}
		>
			<View style={styles.container}>
				<View style={styles.imageContainer}>
					<Image
						source={fn1}
						style={styles.image}
					/>
				</View>
				<View style={styles.infoContainer}>
					<Text
						style={styles.title}
						numberOfLines={1}
					>
						Furniture Number #3
					</Text>
					<Text
						style={styles.supplier}
						numberOfLines={1}
					>
						Beautiful design
					</Text>
					<Text
						style={styles.price}
						numberOfLines={1}
					>
						$ 150.99
					</Text>
					<TouchableOpacity style={styles.addBtn}>
						<Ionicons
							name="add-circle"
							size={35}
							color={COLORS.primary}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</TouchableOpacity>
	);
}
