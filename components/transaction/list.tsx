import React, { useMemo } from "react";
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet } from "react-native";

import { Text, View } from "@/components/themed";
import { tintColorLight } from "@/constants/colors";
import { Padding } from "@/constants/style";
import { useTransactionListInfiniteQuery } from "@/services/queries/transaction";
import { generateArray } from "@/utils";
import ErrorBoundaryComponent from "../error-boundary";
import { ListItem, SkeletonListItem } from "./list-item";
const SkeletonLength = 3;
const List = () => {
	const { data, error, isLoading, isRefetching, isFetchingNextPage, hasNextPage, refetch, fetchNextPage } =
		useTransactionListInfiniteQuery();
	const transactionList = useMemo(() => {
		if (isLoading) return [];
		const pages = data?.pages.flatMap((page) => page.data);
		return pages;
	}, [isLoading, isRefetching, isFetchingNextPage, error]);

	if (isLoading)
		return (
			<>
				{generateArray(SkeletonLength).map((x: unknown, i: number) => {
					return <SkeletonListItem key={i} />;
				})}
			</>
		);
	else
		return (
			<ErrorBoundaryComponent error={error} refetch={refetch}>
				<View style={styles.container}>
					<FlatList
						style={styles.container}
						contentContainerStyle={styles.contentContainer}
						data={transactionList}
						keyExtractor={(item) => item.guid}
						automaticallyAdjustContentInsets
						onEndReached={() => fetchNextPage()}
						contentInsetAdjustmentBehavior="automatic"
						refreshControl={<RefreshControl tintColor={tintColorLight} refreshing={isRefetching} onRefresh={refetch} />}
						renderItem={({ item }) => (isRefetching ? <SkeletonListItem /> : <ListItem item={item} />)}
						onEndReachedThreshold={0.15}
						ListEmptyComponent={<Text>No transaction found</Text>}
						ListFooterComponent={
							<ListFooterComponent
								isLoading={isLoading}
								isFetchingNextPage={isFetchingNextPage}
								hasNextPage={hasNextPage}
							/>
						}
					/>
				</View>
			</ErrorBoundaryComponent>
		);
};
type ListFooterComponentProps = {
	isLoading: boolean;
	isFetchingNextPage: boolean;
	hasNextPage: boolean;
};
const ListFooterComponent = ({ isLoading, isFetchingNextPage, hasNextPage }: ListFooterComponentProps) => {
	if (isLoading) return <></>;
	else if (isFetchingNextPage)
		return (
			<View style={styles.loadingContainer}>
				<ActivityIndicator color={tintColorLight} />
			</View>
		);
	else if (!hasNextPage) return <Text style={styles.noMoreText}>No more transaction</Text>;
	return <></>;
};
export default List;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	contentContainer: {
		paddingInline: Padding.sm,
	},
	loadingContainer: {
		paddingBlock: 32,
	},
	noMoreText: {
		fontWeight: "300",
		textAlign: "center",
		paddingBlock: 16,
	},
});
