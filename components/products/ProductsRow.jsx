import { FlatList, View, Text } from "react-native";
import { SIZES } from "../../assets/constants";
import ProductCardView from "./ProductCardView";
export default function ProductsRow() {
	const products = [
		{
			id: 1,
			uri: "@assets/images/fn1.jpg",
		},
		{
			id: 2,
			uri: "@assets/images/fn2.jpg",
		},
		{
			id: 3,
			uri: "@assets/images/fn3.jpg",
		},
		{
			id: 4,
			uri: "@assets/images/fn4.jpg",
		},
	];
	return (
		<View
			style={{
				marginTop: SIZES.medium,
			}}
		>
			<FlatList
				data={products}
				renderItem={({ item }) => (
					<ProductCardView item={item} />
				)}
				horizontal
				contentContainerStyle={{
					columnGap: SIZES.medium,
				}}
			/>
		</View>
	);
}
