import { DashboardActionItem } from "@/types/dashboard-action-item";
export const DashboardActionItems: DashboardActionItem[] = [
	{
		id: 1,
		title: "Scan",
		icon: "qr-code-scanner",
		toPath: "/scan",
	},
	{
		id: 2,
		title: "Transfer",
		icon: "money",
		toPath: "/transfer",
	},
	{
		id: 3,
		title: "Service 1",
		icon: "radio",
		toPath: "/service-1",
	},
];
