import { Transaction } from "@/models/transaction";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
export const generateTransactionList = (length: number): Transaction[] => {
	const transactionList: Transaction[] = [];

	for (let i = 0; i < length; i++) {
		transactionList.push({
			id: (i + 1).toString(),
			guid: uuidv4(),
			amount: 100,
			date: new Date(),
			description: `Transaction ${i + 1}`,
			status: "completed",
			type: i % 2 === 0 ? "debit" : "credit",
			to: (i % 3).toString(),
		});
	}
	return transactionList;
};
