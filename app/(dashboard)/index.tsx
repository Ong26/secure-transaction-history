import React from "react";
import { ScrollView } from "react-native";

import ActionCard from "@/components/dashboard/action-card";
import BalanceCard from "@/components/dashboard/balance-card";

const Home = () => {
	return (
		<ScrollView
			bounces={false}
			automaticallyAdjustContentInsets={false}
			style={{ flex: 1, backgroundColor: "transparent" }}
		>
			<BalanceCard />
			<ActionCard />
		</ScrollView>
	);
};

export default Home;
