import { generateTransactionList } from "@/data/transaction";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const QUERY_KEY = "transaction";

// used in detail page to have consistent data
const FAKE_TRANSACTION_CACHE = [];

export const useTransactionList = () => {
	return useInfiniteQuery({
		queryKey: [QUERY_KEY, { type: "list" }],
		initialPageParam: 123123,
		queryFn: async ({ pageParam }) => {
			try {
				return new Promise((resolve) => {
					setTimeout(() => {
						resolve(generateTransactionList(10));
					}, 2000);
				});
			} catch (error) {
				return [];
			}
		},
		getNextPageParam: (lastPage, _, lastPageParam) => {
			const hasNext = true;
			let nextPageParam = null;
			if (hasNext) {
				nextPageParam = 20;
				return nextPageParam;
			}
			return undefined;
		},
	});
};

export const useTransactionDetail = () => {
	return useQuery({
		queryKey: [QUERY_KEY, { type: "detail" }],
		queryFn: async () => {
			return generateTransactionList(10);
		},
	});
};
