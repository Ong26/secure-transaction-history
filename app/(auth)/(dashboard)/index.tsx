import React from "react";
import { ScrollView } from "react-native";

import ActionCard from "@/components/dashboard/action-card";
import BalanceCard from "@/components/dashboard/balance-card";
import SecureMaskingFab from "@/components/secure-masking-fab";
import { StyleSheet } from "react-native";
const Home = () => {
	return (
		<ScrollView
			bounces={false}
			automaticallyAdjustContentInsets={false}
			contentContainerStyle={styles.contentContainer}
			style={styles.container}
		>
			<BalanceCard />
			<ActionCard />
			<SecureMaskingFab />
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "transparent",
	},
	contentContainer: {
		flexGrow: 1,
		backgroundColor: "transparent",
	},
});

export default Home;
