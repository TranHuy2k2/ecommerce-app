import {
	View,
	Text,
	TouchableOpacity,
	SafeAreaView,
	Image,
	ScrollView,
} from "react-native";
import styles from "./ProductDetail.style";
import {
	Fontisto,
	Ionicons,
	MaterialCommunityIcons,
	SimpleLineIcons,
} from "@expo/vector-icons";
import fn1 from "@assets/images/fn1.jpg";
import { COLORS } from "../assets/constants";
import { useState } from "react";
export default function ProductDetail({ navigation }) {
	const [quantity, setQuantity] = useState(1);
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.upperRow}>
				<TouchableOpacity
					onPress={(e) => navigation.goBack()}
				>
					<Ionicons
						name="chevron-back-circle"
						size={30}
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<Ionicons
						name="heart"
						size={30}
						color={COLORS.primary}
					/>
				</TouchableOpacity>
			</View>
			<Image source={fn1} style={styles.image} />
			<View style={styles.details}>
				<View style={styles.titleRow}>
					<Text style={styles.title}>
						Living Room
					</Text>
					<View style={styles.priceWrapper}>
						<Text style={styles.price}>
							$149.99
						</Text>
					</View>
				</View>
				<View style={styles.ratingRow}>
					<View style={styles.rating}>
						{[1, 2, 3, 4, 5].map(
							(item, index) => (
								<Ionicons
									key={index}
									name="star"
									size={24}
									color="gold"
								/>
							),
						)}
						<Text style={styles.ratingText}>
							(4.9)
						</Text>
					</View>

					<View style={styles.rating}>
						<TouchableOpacity
							onPress={() =>
								setQuantity(
									(prev) => prev + 1,
								)
							}
						>
							<SimpleLineIcons
								name="plus"
								size={20}
							/>
						</TouchableOpacity>
						<Text style={styles.ratingText}>
							{quantity}
						</Text>
						<TouchableOpacity
							onPress={() =>
								setQuantity(
									(prev) => prev - 1,
								)
							}
						>
							<SimpleLineIcons
								name="minus"
								size={20}
							/>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.descriptionWrapper}>
					<ScrollView>
						<Text style={styles.description}>
							Description
						</Text>
						<Text style={styles.descText}>
							Lorem ipsum dolor sit amet
							consectetur adipisicing elit.
							Minus libero quis distinctio
							tempora, incidunt quod alias id
							iure numquam labore ex cum?
							Nihil ut non fugit quidem
							suscipit vel doloremque!
						</Text>
					</ScrollView>
				</View>
				<View style={styles.shippingRow}>
					<View
						style={{
							flexDirection: "row",
						}}
					>
						<Ionicons
							name="location-outline"
							size={20}
						/>
						<Text style={{ marginStart: 4 }}>
							Can Tho
						</Text>
					</View>

					<View
						style={{
							flexDirection: "row",
						}}
					>
						<MaterialCommunityIcons
							name="truck-delivery-outline"
							size={20}
						/>

						<Text style={{ marginStart: 6 }}>
							Free Shipping
						</Text>
					</View>
				</View>
				<View style={styles.cartRow}>
					<TouchableOpacity style={styles.buyBtn}>
						<Text style={styles.buyText}>
							Buy Now
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.cartBtn}
					>
						<Fontisto
							name="shopping-bag"
							size={18}
							color={COLORS.white}
							style={styles.cart}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
}
