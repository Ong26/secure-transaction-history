import React from "react";

import TransactionList from "@/components/transaction/list";
import { View } from "react-native";

const Page = () => {
	return (
		<View style={{ flex: 1 }}>
			<TransactionList />
		</View>
	);
};

export default Page;
