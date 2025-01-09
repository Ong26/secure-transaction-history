import { Text, View, useThemeColor } from "@/components/themed";
import { tintColorLight } from "@/constants/colors";
import { Padding } from "@/constants/style";
import { Transaction } from "@/models/transaction";
import { format } from "date-fns";
import { Link } from "expo-router";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import Skeleton from "../skeleton";

type ListItemProps = {
	item: Transaction;
};
const ListItem = (props: ListItemProps) => {
	const { item } = props;
	const textColor = useThemeColor({}, "text");
	return (
		<Link href={`/transaction/detail/${item.guid}`} asChild>
			<Pressable style={styles.listItem}>
				<View style={styles.container}>
					<View style={styles.leftColumn}>
						<Text style={styles.dateText}>{format(item.date, "dd MMM, yyyy HH:mm")}</Text>
						<View style={styles.typeContainer}>
							{item.type === "debit" ? (
								<Text style={[styles.boldText, { color: tintColorLight }]}>Debit </Text>
							) : (
								<Text style={styles.boldText}>Credit </Text>
							)}
							<Text style={[styles.boldText, styles.stakeholderText]} numberOfLines={1}>
								{item.stakeholder}
							</Text>
						</View>

						<View style={styles.descriptionContainer}>
							<Text style={styles.descriptionText} numberOfLines={2}>
								{item.description}
							</Text>
						</View>
					</View>
					<View style={styles.rightColumn}>
						<View style={styles.amountContainer}>
							{item.type === "debit" ? (
								<Text style={[styles.boldText, { color: tintColorLight }]}>+</Text>
							) : (
								<Text style={styles.boldText}>-</Text>
							)}
							<Text
								style={[
									styles.boldText,
									styles.amountText,
									{ color: item.type === "debit" ? tintColorLight : textColor },
								]}
							>
								{item.amount.toFixed(2)}
							</Text>
						</View>
					</View>
				</View>
			</Pressable>
		</Link>
	);
};

const SkeletonListItem = () => {
	return (
		<View style={styles.listItem}>
			<View style={styles.container}>
				<View style={styles.leftColumn}>
					<Skeleton width={100} height={20} />
					<View style={styles.typeContainer}>
						<Skeleton width={40} height={20} />
					</View>
					<View style={styles.descriptionContainer}>
						<Skeleton width={300} height={20} />
					</View>
				</View>
				<View style={styles.rightColumn}>
					<View style={styles.amountContainer}>
						<Skeleton width={60} height={30} />
					</View>
				</View>
			</View>
		</View>
	);
};

export { ListItem, SkeletonListItem };

const styles = StyleSheet.create({
	listItem: {
		paddingBlock: Padding.md,
		paddingInline: Padding.xs,
		borderBottomWidth: 1,
		borderBottomColor: "#E0E0E0",
	},
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	leftColumn: {
		flexDirection: "column",
		width: "70%",
		flex: 1,
	},
	dateText: {
		fontSize: 14,
		color: "#808080",
	},
	typeContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginBlockStart: Padding.xs,
	},
	descriptionContainer: {
		marginBlockStart: Padding.xs,
	},
	descriptionText: {
		fontSize: 14,
	},
	rightColumn: {
		flexDirection: "column",
		alignItems: "flex-end",
		justifyContent: "center",
		width: "30%",
	},
	amountContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	boldText: {
		fontSize: 16,
		fontWeight: "600",
	},
	amountText: {
		fontSize: 20,
		fontWeight: "bold",
	},

	stakeholderText: {
		paddingInlineStart: 4,
		width: 200,
	},
});
