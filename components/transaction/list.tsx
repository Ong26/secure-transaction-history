import React from "react";
import { FlatList, StyleSheet } from "react-native";

import { Text, View } from "@/components/themed";
import { Padding } from "@/constants/style";
import { generateTransactionList } from "@/data/transaction";
import { Transaction } from "@/models/transaction";

type Props = {};

const data = generateTransactionList(50);
const List = () => {
	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				contentInsetAdjustmentBehavior="automatic"
				style={styles.container}
				contentContainerStyle={styles.contentContainer}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <ListItem item={item} />}
				// ListHeaderComponent={<Text>Header</Text>}
				// stickyHeaderIndices={[0]}
			/>
		</View>
	);
};

type ListItemProps = {
	item: Transaction;
};
const ListItem = (props: ListItemProps) => {
	const { item } = props;
	return (
		<View style={styles.listItem}>
			<Text>List Item {item.id}</Text>
		</View>
	);
};

export default List;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	contentContainer: {
		gap: Padding.md,
	},
	listItem: {
		backgroundColor: "red",
		padding: Padding.md,
	},
});
