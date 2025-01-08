import { Text, View } from "@/components/themed";
import { tintColorLight } from "@/constants/colors";
import { Padding } from "@/constants/style";
import { DashboardActionItems } from "@/data/dashboard-action";
import { DashboardActionItem } from "@/types/dashboard-action-item";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet } from "react-native";

type ActionCardItemProps = {
	item: DashboardActionItem;
};
const ActionCardItem = (props: ActionCardItemProps) => {
	const { item } = props;
	return (
		<View style={styles.actionCardItem}>
			<Text style={styles.actionCardItemTitle}>{item.title}</Text>
			<MaterialIcons name={item.icon} size={36} color={tintColorLight} style={styles.actionCardItemIcon} />
		</View>
	);
};
const ActionCard = () => {
	return (
		<View style={styles.actionCard} lightColor={"white"} darkColor={"transparent"}>
			{DashboardActionItems.map((item) => (
				<ActionCardItem key={item.id} item={item} />
			))}
		</View>
	);
};

export default ActionCard;

const styles = StyleSheet.create({
	actionCard: {
		margin: Padding.md,
		padding: Padding.sm,
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		flexDirection: "row",
		justifyContent: "space-between",
		borderColor: tintColorLight,
		borderWidth: 3,
		alignItems: "center",
		flexWrap: "nowrap",
		gap: 10,
	},
	actionCardItem: {
		justifyContent: "center",
		alignItems: "center",
		height: 80,
		width: 80,
		borderRadius: 10,
		backgroundColor: "transparent",
	},
	actionCardItemTitle: {
		fontSize: 16,
		fontWeight: "bold",
		color: tintColorLight,
	},
	actionCardItemIcon: {
		marginTop: 8,
	},
});
