export type Transaction = {
	id: string;
	guid: string;
	amount: number;
	date: string | Date;
	description: string;
	status: "pending" | "completed" | "failed";
	type: "debit" | "credit";
	to: string;
};
