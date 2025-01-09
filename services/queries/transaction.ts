import { TransactionListPages } from "@/data/transaction";
import { TransactionListInfiniteQueryResult } from "@/types/transaction";
import { useInfiniteQuery, useQuery, useQueryClient } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";

const QUERY_KEY = "transaction";

export const useTransactionListInfiniteQuery = () => {
	return useInfiniteQuery({
		queryKey: [QUERY_KEY, { type: "list" }],
		initialPageParam: 1,

		queryFn: async ({ pageParam }): Promise<TransactionListInfiniteQueryResult> => {
			try {
				return new Promise((resolve, reject) => {
					// mock api call to end on page 4
					const nextPageParam = pageParam < 4 ? pageParam + 1 : undefined;
					const result = { pageParam, nextPageParam, data: TransactionListPages[pageParam - 1] };
					setTimeout(() => {
						if (pageParam === 4) {
							reject("Network Error");
						}
						resolve(result);
					}, 500);
				});
			} catch (error) {
				throw error;
			}
		},
		getNextPageParam: (lastPage) => {
			return lastPage?.nextPageParam;
		},
	});
};

export const useTransactionDetailQuery = () => {
	const { guid } = useLocalSearchParams();
	//use query client instead of refetching to prevent data renew
	const queryClient = useQueryClient();

	return useQuery({
		queryKey: [QUERY_KEY, { type: "detail", guid }],
		queryFn: async () => {
			const transactionListPages = await queryClient.ensureInfiniteQueryData<TransactionListInfiniteQueryResult>({
				queryKey: [QUERY_KEY, { type: "list" }],
				initialPageParam: 1,
			});
			const flattedTransaction = transactionListPages?.pages.flatMap((page) => page.data);
			const transaction = flattedTransaction?.find((transaction) => transaction.guid === guid);
			return transaction;
		},
	});
};
