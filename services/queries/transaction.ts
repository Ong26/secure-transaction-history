import { generateTransactionList } from "@/data/transaction";
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
					const data = generateTransactionList(10, pageParam);
					if (pageParam === 1) {
						data[0].description = "This is to test scenario of transaction not found";
						data[0].status = "failed";
					}
					const result = { pageParam, nextPageParam, data };
					setTimeout(() => {
						// if (pageParam === 3) {
						// 	reject(new Error("Network Error"));
						// }
						resolve(result);
					}, 1500);
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
			try {
				const transactionListPages = await queryClient.ensureInfiniteQueryData<TransactionListInfiniteQueryResult>({
					queryKey: [QUERY_KEY, { type: "list" }],
					initialPageParam: 1,
				});
				const flattedTransaction = transactionListPages?.pages.flatMap((page) => page.data);
				const transaction = flattedTransaction?.find((transaction) => transaction.guid === guid);
				if (transaction?.id === 1) {
					throw new Error("Transaction not found");
				}
				return transaction;
			} catch (error) {
				throw error;
			}
		},
	});
};
