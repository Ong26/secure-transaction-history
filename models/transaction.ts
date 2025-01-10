export type Transaction = {
	id: number;
	guid: string;
	amount: number;
	date: string | Date;
	description: string;
	status: "pending" | "completed" | "failed";
	type: "debit" | "credit";
	stakeholder: string;
	stakeholderId: number;
	stakeholderGuid: string;
};
