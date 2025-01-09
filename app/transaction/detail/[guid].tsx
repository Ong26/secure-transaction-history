import Skeleton from "@/components/skeleton";
import { Text, View } from "@/components/themed";
import { tintColorLight } from "@/constants/colors";
import { Padding } from "@/constants/style";
import { TransactionStatus, TransactionType } from "@/constants/transaction";
import { useTransactionDetailQuery } from "@/services/queries/transaction";
import { format } from "date-fns";
import React, { ReactNode } from "react";
import { ScrollView, StyleSheet } from "react-native";

const Detail = () => {
	const { isLoading, data } = useTransactionDetailQuery();
	if (isLoading) return <Skeleton />;
	return (
		<ScrollView style={styles.scrollView} bounces={false} contentContainerStyle={styles.scrollViewContent}>
			<View style={styles.amountContainer}>
				{data?.type === "debit" ? (
					<>
						<Text style={[styles.amountText, { color: tintColorLight }]}>+</Text>
						<Text style={[styles.amountText, { color: tintColorLight }]}>RM {data?.amount.toFixed(2)}</Text>
					</>
				) : (
					<>
						<Text style={[styles.amountText, styles.amountTextDebit]}>-</Text>
						<Text style={[styles.amountText, styles.amountTextDebit]}>RM {data?.amount.toFixed(2)}</Text>
					</>
				)}
			</View>
			<View>
				<DetailItem label="Date" value={format(data!.date, "dd MMM yyyy HH:mm")} />
				<DetailItem label="Type" value={TransactionType[data!.type]} />
				<DetailItem label="Status" value={TransactionStatus[data!.status]} />
				<DetailItem label="Stakeholder" value={data?.stakeholder} />
				<DetailItem
					label="Description"
					value={<Text style={styles.descriptionText}>{data?.description}</Text>}
					column
				/>
			</View>
		</ScrollView>
	);
};

type DetailItemProps = {
	label: string;
	value: string | ReactNode;
	column?: boolean;
};

const DetailItem = ({ label, value, column }: DetailItemProps) => {
	return (
		<View style={[styles.detailItemContainer, column ? styles.detailItemContainerColumn : {}]}>
			<Text style={styles.detailLabel}>{label}</Text>
			{typeof value === "string" ? <Text style={styles.detailValue}>{value}</Text> : value}
		</View>
	);
};
export default Detail;

const styles = StyleSheet.create({
	scrollView: {
		flex: 1,
	},
	scrollViewContent: {
		flex: 1,
	},
	amountContainer: {
		paddingVertical: Padding.lg,
		paddingHorizontal: Padding.md,
		flexDirection: "row",
	},
	amountText: {
		fontSize: 36,
		fontWeight: "bold",
	},
	amountTextDebit: {
		color: tintColorLight,
	},
	detailItemContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
		padding: Padding.md,
		borderBottomWidth: 1,
		borderBottomColor: "rgba(0,0,0,0.1)",
	},
	detailItemContainerColumn: {
		flexDirection: "column",
		alignItems: "flex-start",
	},
	detailLabel: {
		fontSize: 16,
		width: "30%",
	},
	detailValue: {
		fontSize: 16,
		fontWeight: "500",
		width: "70%",
		textAlign: "right",
	},
	descriptionText: {
		fontSize: 16,
		fontWeight: "500",
		textAlign: "left",
		paddingTop: Padding.sm,
	},
});
