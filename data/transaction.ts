import { Transaction } from "@/models/transaction";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { TransactionUsers } from "./user";

const MAX_LENGTH = 20;
const MAX_PAGE = 4;
export const generateTransactionList = (length: number, page: number = 1): Transaction[] => {
	const transactionList: Transaction[] = [];

	const len = Math.min(Math.max(length, 10), MAX_LENGTH);
	for (let i = 0; i < len; i++) {
		const transactionUser = TransactionUsers[Math.floor(Math.random() * TransactionUsers.length)];
		transactionList.push({
			id: (i + 1 + page).toString(),
			guid: uuidv4(),
			amount: Math.random() * 500.0,
			date: new Date(
				2024,
				MAX_PAGE - page,
				length - i + 1,
				Math.floor(Math.random() * 24),
				Math.floor(Math.random() * 60)
			), // Random date between Jan 1-8, 2025
			description: `Transaction ${
				i + 1
			} parent camera necessary near consider run room slipped wait raw milk stand forth automobile tell cut satellites development plant outer problem solution stretch soldier`,
			status: "completed",
			type: i % 2 === 0 ? "debit" : "credit",
			stakeholder: transactionUser.name,
			stakeholderId: transactionUser.id,
			stakeholderGuid: transactionUser.guid,
		});
	}
	return transactionList;
};
const PageOneTransactionList = generateTransactionList(10, 1);
const PageTwoTransactionList = generateTransactionList(10, 2);
const PageThreeTransactionList = generateTransactionList(10, 3);
export const PageFourTransactionList = generateTransactionList(10, 4);
export const TransactionListPages = [
	PageOneTransactionList,
	PageTwoTransactionList,
	PageThreeTransactionList,
	PageFourTransactionList,
];
