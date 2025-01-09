import React, { useMemo } from "react";
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet } from "react-native";

import { Text, View } from "@/components/themed";
import { tintColorLight } from "@/constants/colors";
import { Padding } from "@/constants/style";
import { useTransactionListInfiniteQuery } from "@/services/queries/transaction";
import { generateArray } from "@/utils";
import ErrorScreen from "./error";
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
	console.log(error);
	if (!!error) return <ErrorScreen refetch={refetch} />;
	else if (isLoading)
		return (
			<>
				{generateArray(SkeletonLength).map((x: unknown, i: number) => {
					return <SkeletonListItem key={i} />;
				})}
			</>
		);
	else
		return (
			<View style={styles.container}>
				<FlatList
					style={styles.container}
					contentContainerStyle={{ paddingHorizontal: Padding.md }}
					data={transactionList}
					keyExtractor={(item) => item.guid}
					automaticallyAdjustContentInsets
					onEndReached={() => fetchNextPage()}
					contentInsetAdjustmentBehavior="automatic"
					refreshControl={<RefreshControl tintColor={tintColorLight} refreshing={isRefetching} onRefresh={refetch} />}
					renderItem={({ item }) => <ListItem item={item} />}
					onEndReachedThreshold={0.15}
					ListFooterComponent={
						<ListFooterComponent
							isLoading={isLoading}
							isFetchingNextPage={isFetchingNextPage}
							hasNextPage={hasNextPage}
						/>
					}
				/>
			</View>
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
			<View style={{ paddingBlock: 32 }}>
				<ActivityIndicator color={tintColorLight} />
			</View>
		);
	else if (!hasNextPage)
		return <Text style={{ fontWeight: 300, textAlign: "center", paddingBlock: 16 }}>No more transaction</Text>;
	return <></>;
};
export default List;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
