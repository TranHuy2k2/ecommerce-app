import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../assets/constants";
const styles = StyleSheet.create({
	textStyle: {
		fontFamily: "bold",
		fontSize: 40,
	},
	appBarWrapper: {
		marginHorizontal: 22,
		marginTop: SIZES.small,
	},
	appBar: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	location: {
		fontFamily: "bold",
		fontSize: SIZES.medium,
		color: COLORS.gray,
	},
	cartCount: {
		position: "absolute",
		width: 16,
		height: 16,
		bottom: 16,
		backgroundColor: "green",
		borderRadius: 8,
		alignItems: "center",
		zIndex: 1,
	},
	cartCountText: {
		fontFamily: "regular",
		color: COLORS.lightWhite,
		fontSize: 10,
		fontWeight: "600",
	},
});

export default styles;
