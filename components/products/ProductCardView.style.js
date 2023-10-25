import { StyleSheet } from "react-native";
import { COLORS } from "@assets/constants";
import { SIZES } from "@assets/constants";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default StyleSheet.create({
	container: {
		backgroundColor: COLORS.secondary,
		borderRadius: SIZES.medium,
		width: 182,
		height: 240,
		marginEnd: 22,
	},
	imageContainer: {
		flex: 1,
		borderRadius: SIZES.small,
		overflow: "hidden",
		marginLeft: SIZES.small / 2,
		marginTop: SIZES.small / 2,
		width: 170,
	},
	image: {
		aspectRatio: 1,
		width: "100%",
		resizeMode: "cover",
		height: 180,
	},
	infoContainer: {
		padding: SIZES.small,
	},
	title: {
		fontFamily: "bold",
		fontSize: SIZES.large,
		marginBottom: 2,
	},
	supplier: {
		fontStyle: "italic",
		color: COLORS.gray,
		fontSize: SIZES.small,
	},
	price: {
		fontFamily: "bold",
		fontSize: SIZES.medium,
	},
	addBtn: {
		position: "absolute",
		float: "right",
		bottom: 10,
		right: 10,
	},
});
