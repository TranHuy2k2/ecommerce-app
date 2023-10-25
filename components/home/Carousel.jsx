import { View, Text, StyleSheet } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS, SIZES } from "../../assets/constants";
import fn1 from "@assets/images/fn1.jpg";
import fn2 from "@assets/images/fn2.jpg";
import fn3 from "@assets/images/fn3.jpg";
import fn4 from "@assets/images/fn4.jpg";
import fn5 from "@assets/images/fn5.jpg";
const sliders = [
	// "https://i.pinimg.com/564x/9e/95/dd/9e95dd0fe8fcf76b50056ee3e67433e2.jpg",
	fn1,
	fn2,
	fn3,
	fn4,
	fn5,
];
export default function Carousel() {
	return (
		<View style={styles.container}>
			<SliderBox
				images={sliders}
				dotColor={COLORS.primary}
				inactiveDotColor={COLORS.secondary}
				ImageComponentStyle={{
					borderRadius: 15,
					marginTop: 5,
					width: "95%",
				}}
				autoplay
				circleLoop
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		marginBottom: SIZES.medium,
	},
});
