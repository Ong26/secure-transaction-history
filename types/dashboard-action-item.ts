import { MaterialIcons } from "@expo/vector-icons";

export type DashboardActionItem = {
	id: number;
	title: string;
	icon: keyof typeof MaterialIcons.glyphMap;
	toPath: string;
};
