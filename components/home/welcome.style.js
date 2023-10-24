import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/constants";

export default styles = StyleSheet.create({
	container: { width: "100%", padding: 12 },
	welcomeText: (color, top) => ({
		fontFamily: "bold",
		fontSize: SIZES.xxLarge - 12,
		color,
		marginTop: top,
	}),
	searchContainer: {
		flexDirection: "row",
		backgroundColor: COLORS.secondary,
		borderRadius: SIZES.medium,
		height: 50,
		alignItems: "center",
		marginHorizontal: SIZES.small,
		marginVertical: SIZES.medium,
	},
	searchIcon: {
		color: COLORS.gray,
		marginHorizontal: 12,
	},
	searchWrapper: {
		flex: 1,
	},
	searchInput: {
		fontFamily: "regular",
		width: "100%",
		height: "100%",
		paddingHorizontal: SIZES.small,
	},
	searchBtn: {
		backgroundColor: COLORS.primary,
		borderRadius: SIZES.medium,
		width: 50,
		height: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
});
