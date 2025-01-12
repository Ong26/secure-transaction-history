import ErrorBoundaryCapture from "@/components/error-boundary-capture";
import MaskingText from "@/components/masking-text";
import SecureMaskingFab from "@/components/secure-masking-fab";
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
			<SecureMaskingFab />
			<View style={styles.amountContainer}>
				<MaskingText style={styles.amountText}>
					{data?.type === "debit" ? (
						<>
							<Text style={[styles.amountText, { color: tintColorLight }]}>+</Text>
							<Text style={[styles.amountText, { color: tintColorLight }]}>RM {data?.amount.toFixed(2)}</Text>
						</>
					) : (
						<>
							<Text style={[styles.amountText]}>-</Text>
							<Text style={[styles.amountText]}>RM {data?.amount.toFixed(2)}</Text>
						</>
					)}
				</MaskingText>
			</View>
			<View>
				<DetailItem label="Date" value={data?.date && format(data?.date, "dd MMM yyyy HH:mm")} />
				<DetailItem
					label="Type"
					value={<MaskingText style={styles.detailValue}>{data?.type && TransactionType[data?.type]}</MaskingText>}
				/>
				<DetailItem label="Status" value={data?.status && TransactionStatus[data?.status]} />
				<DetailItem
					label="Stakeholder"
					value={<MaskingText style={styles.detailValue}>{data?.stakeholder}</MaskingText>}
				/>
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
const Page = () => {
	return (
		<ErrorBoundaryCapture>
			<Detail />
		</ErrorBoundaryCapture>
	);
};
export default Page;

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
