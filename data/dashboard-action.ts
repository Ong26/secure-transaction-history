import { DashboardActionItem } from "@/types/dashboard-action-item";
export const DashboardActionItems: DashboardActionItem[] = [
	{
		id: 1,
		title: "Demo 1",
		icon: "qr-code-scanner",
		toPath: "/scan",
	},
	{
		id: 2,
		title: "Demo 2",
		icon: "money",
		toPath: "/transfer",
	},
	{
		id: 3,
		title: "Demo 3",
		icon: "radio",
		toPath: "/service-1",
	},
];
