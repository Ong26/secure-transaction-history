import { Transaction } from "@/models/transaction";

export type TransactionListInfiniteQueryResult = {
	pageParam: number;
	nextPageParam: number | undefined;
	data: Transaction[];
};
