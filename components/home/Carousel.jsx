import { View, Text, StyleSheet } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../assets/constants";
export default function Carousel() {
	const sliders = [
		"https://i.pinimg.com/564x/9e/95/dd/9e95dd0fe8fcf76b50056ee3e67433e2.jpg",
		require("@assets/images/fn1.jpg"),
		require("@assets/images/fn2.jpg"),
		require("@assets/images/fn3.jpg"),
		require("@assets/images/fn4.jpg"),
		require("@assets/images/fn5.jpg"),
	];
	console.log(require("@assets/images/fn1.jpg"));
	return (
		<View style={styles.container}>
			<SliderBox
				images={sliders}
				dotColor={COLORS.primary}
				inactiveDotColor={COLORS.secondary}
				ImagecomponentStyle={{
					borderRadius: 15,
					width: "95%",
					marginTop: 5,
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},
});
