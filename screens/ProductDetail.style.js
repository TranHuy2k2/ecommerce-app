import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../assets/constants";

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	upperRow: {
		marginHorizontal: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		position: "absolute",
		top: SIZES.xxLarge,
		width: SIZES.width - 44,
		zIndex: 999,
	},
	image: {
		resizeMode: "cover",
		width: "100%",
		height: 350,
	},
	details: {
		marginTop: -SIZES.large,
		backgroundColor: COLORS.lightWhite,
		width: SIZES.width,
		borderTopLeftRadius: SIZES.medium,
		borderTopRightRadius: SIZES.medium,
		flex: 1,
	},
	titleRow: {
		marginHorizontal: 20,
		paddingBottom: SIZES.small,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: SIZES.width - 44,
		top: 20,
	},
	title: {
		fontFamily: "bold",
		fontSize: SIZES.large,
	},
	priceWrapper: {
		padding: SIZES.small,
		backgroundColor: COLORS.secondary,
		borderRadius: SIZES.small,
	},
	price: {
		fontFamily: "semiBold",
		fontSize: SIZES.large,
	},
	ratingRow: {
		paddingBottom: SIZES.small,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: SIZES.width - 10,
		top: 5,
	},
	rating: {
		top: SIZES.large,
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		marginHorizontal: SIZES.large,
	},
	ratingText: {
		color: COLORS.gray,
		marginHorizontal: 12,
	},
	descriptionWrapper: {
		marginTop: SIZES.large + 10,
		marginHorizontal: SIZES.large,
	},
	description: {
		fontFamily: "medium",
		fontSize: SIZES.medium - 2,
	},
	descText: {
		marginTop: SIZES.medium,
		fontFamily: "regular",
		fontSize: SIZES.small,
		textAlign: "justify",
		marginBottom: SIZES.small,
	},
	shippingRow: {
		backgroundColor: COLORS.secondary,
		paddingHorizontal: 12,
		paddingVertical: 6,
		flexDirection: "row",
		justifyContent: "space-between",
	},
});
